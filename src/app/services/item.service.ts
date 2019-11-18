import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Item} from '../models/item';

import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class ItemService {

  itemResource: string;
  itemResourceURL: string;

  /**
   * Constructor.
   */
  constructor(private http: HttpClient) {
    this.itemResource = 'api';
    this.itemResourceURL = `${environment.serverBaseURL}/${this.itemResource}`;
  }

  /**
   * Returns all stickies.
   *
   * @return {Observable<Array<Item>>} {Observable sticky array of stickies}
   */
  getItems(): Observable<Array<Item>> {
    return this.http.get<Array<Item>>(`${this.itemResourceURL}/items`);
  }

  /**
   * Creates new sticky.
   *
   * @param  {Item} sticky: Sticky {new sticky object}
   * @return {Observable<Item>} {Observable for saved sticky object}
   */
  createItem(item: Item = null): Observable<Item> {
    let newItem: Item;
    newItem = item ? item : new Item('Untitled Item', '');
    return this.http.post<Item>(`${this.itemResourceURL}/item`, newItem);
  }

  updateItem(id: string, title: string, content: string) {
    const arr = [];
    const modifiedDate = new Date();
    const url = `${this.itemResourceURL}/item/${id}`;
    console.log(url);
    const newItem = new Item(title, content);
    const observable = this.http.put<Item>('http://localhost:4000/api/item/5dc5a3f81f2d560f97789d9d', newItem);
    observable.subscribe(res => {
      console.log(res);
    });
  }
}
