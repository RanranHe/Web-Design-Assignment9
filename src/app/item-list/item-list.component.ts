import {Component, OnInit, Input} from '@angular/core';
import {Item} from '../models/item';
import {ItemService} from '../services/item.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @Input() itemsChild: Map<String, Item>;
  itemService: ItemService;

  constructor(itemService: ItemService) {
    this.itemService = itemService;
  }

  updateItem(id: string, title: string, content: string) {
    const newItem = this.itemsChild[id];
    newItem.title = title;
    newItem.content = content;
    this.itemService.updateItem(id, title, content);
    this.itemsChild[id] = newItem;
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
