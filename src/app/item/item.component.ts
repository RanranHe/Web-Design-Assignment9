import {Component, OnInit, Input} from '@angular/core';
import {Item} from '../models/item';
import {ItemService} from '../services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit {
  @Input() item: Item;
  itemService: ItemService;

  constructor(itemService: ItemService) {
    this.itemService = itemService;
  }

  ngOnInit() {
  }

}
