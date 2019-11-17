import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @Input() itemsChild: Array<Item>;
  itemService: ItemService;

  constructor(itemService: ItemService) {
    this.itemService = itemService;
  }

  // createItem() {
  //   const newItem$: Observable<Item> = this.itemService.createItem();
  //   newItem$.subscribe(newItem => {
  //     this.itemsChild.push(newItem);
  //   });
  // }

  ngOnInit() {
  }

}
