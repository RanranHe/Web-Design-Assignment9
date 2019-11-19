import {Component, OnInit, Input} from '@angular/core';
import {Item} from '../models/item';
import {ItemService} from '../services/item.service';
import {ItemListComponent} from '../item-list/item-list.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit {
  @Input() item: Item; // item passing from item-list
  @Input() itemListComponent: ItemListComponent; // passing item-list in order to pass requests
  itemService: ItemService;
  showItem = false;

  /**
   * Constructor
   * @param itemService
   */
  constructor(itemService: ItemService) {
    this.itemService = itemService;
  }

  // show item details
  view() {
    this.showItem = true;
  }

  // hide item details
  cancel() {
    this.showItem = false;
  }

  /**
   * Passing request to item-list
   * Delete item by id
   * @param id
   */
  delete(id: string) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.itemListComponent.deleteItem(id);
    } else {
      return;
    }
  }

  ngOnInit() {
  }

}
