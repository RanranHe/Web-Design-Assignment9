import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ItemService {

  itemResource: string;
  itemResourceURL: string;

  /**
   * Constructor.
   */
  constructor(private http: HttpClient) {
    this.itemResource = 'stickies';
    this.itemResourceURL = `${environment.serverBaseURL}/${this.itemResource}`;
  }

  /**
   * Returns all stickies.
   *
   * @return {Observable<Array<Item>>} {Observable sticky array of stickies}
   */
  getStickies(): Observable<Array<Item>> {
    return this.http.get<Array<Item>>(this.itemResourceURL);
  }

  /**
   * Creates new sticky.
   *
   * @param  {Item} sticky: Sticky {new sticky object}
   * @return {Observable<Item>} {Observable for saved sticky object}
   */
  createSticky(sticky: Item = null): Observable<Item> {
    let newSticky: Item;
    newSticky = sticky ? sticky : new Item('Untitled Sticky', '');
    return this.http.post<Item>(this.itemResourceURL, newSticky);
  }
}
