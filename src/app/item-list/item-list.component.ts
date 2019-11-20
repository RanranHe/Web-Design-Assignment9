import {Component, OnInit, Input, Output} from '@angular/core';
import {Item} from '../models/item';
import {ItemService} from '../services/item.service';
import {forEach} from '@angular/router/src/utils/collection';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})

export class ItemListComponent implements OnInit {
  @Input() itemsChild: Array<Item>;
  @Output() itemListComponent: ItemListComponent;
  itemService: ItemService;
  showCreate = false;

  constructor(itemService: ItemService) {
    this.itemService = itemService;
    this.itemListComponent = this;
    // get all items
    const items$: Observable<Array<Item>> = itemService.getItems();
    items$.subscribe(items => {
      this.itemsChild = items;
    });
  }

  /**
   * update item request
   * send to item service and do the update on current arr
   * @param id
   * @param title
   * @param content
   * @param modifiedDate
   */
  updateItem(id: string, title: string, content: string, modifiedDate: Date, dueDate: Date) {
    this.itemsChild.forEach(item => {
      if (item.id === id) {
        item.title = title;
        item.content = content;
        item.modifiedDate = modifiedDate;
        item.dueDate = dueDate;
        this.itemService.updateItem(id, title, content, modifiedDate, dueDate);
      }
    });
  }

  /**
   * delete item by id
   * pass to item service and do delete on current arr
   * @param id
   */
  deleteItem(id: string) {
    this.itemsChild.forEach((item, index) => {
      if (item.id === id) {
        this.itemsChild.splice(index, 1);
        this.itemService.deleteItem(id);
      }
    });
  }

  /**
   * create item
   * pass to item service and do create on current arr
   * @param item
   */
  createItem(item: Item) {
    const newItem$: Observable<Item> = this.itemService.createItem(item);
    newItem$.subscribe(res => {
      console.log(res);
      // @ts-ignore
      this.itemsChild.push(res.item);
    });
  }

  // show create area
  showCreateArea() {
    this.showCreate = true;
  }

  updateStatus(id: string) {
    this.itemsChild.forEach(item => {
      if (item.id === id) {
        item.status = 'Complete';
        this.itemService.updateStatus(id);
      }
    });
  }

  ngOnInit() {
  }

}
