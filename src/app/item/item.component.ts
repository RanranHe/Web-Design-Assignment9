import {Component, OnInit, Input} from '@angular/core';
import {Item} from '../models/item';
import {ItemService} from '../services/item.service';
import {ItemListComponent} from '../item-list/item-list.component';
import {DatePipe} from '@angular/common';

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
  // dateString: string;

  /**
   * Constructor
   * @param datePipe
   * @param itemService
   */
  constructor(private datePipe: DatePipe, itemService: ItemService) {
    this.itemService = itemService;
  }

  // show item details
  view() {
    this.showItem = true;
  }

  // hide item details
  cancelView() {
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

  complete(id: string) {
    if (confirm('Already complete?')) {
      this.itemListComponent.updateStatus(id);
    } else {
      return;
    }
  }

  getDateString(date: Date) {
    const newDate = new Date(date);
    return (newDate.getUTCMonth() + 1) + '/' + newDate.getUTCDate() + '/' + newDate.getUTCFullYear();
  }

  ngOnInit() {
    // const date = new Date(this.item.dueDate);
    // this.dateString = (date.getUTCMonth() + 1) + '/' + date.getUTCDate() + '/' + date.getFullYear();
  }
}
