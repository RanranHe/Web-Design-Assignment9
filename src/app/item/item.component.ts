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
  @Input() item: Item;
  @Input() itemListComponent: ItemListComponent;
  itemService: ItemService;
  showItem = false;

  constructor(itemService: ItemService) {
    this.itemService = itemService;
  }

  view() {
    this.showItem = true;
  }

  ngOnInit() {
  }

}
