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

  constructor(itemService: ItemService) {
    this.itemService = itemService;
    this.itemListComponent = this;
  }

  updateItem(id: string, title: string, content: string, modifiedDate: Date) {
    this.itemsChild.forEach(item => {
      if (item.id === id) {
        item.title = title;
        item.content = content;
        item.modifiedDate = modifiedDate;
        this.itemService.updateItem(id, title, content, modifiedDate);
      }
    });
  }

  deleteItem(id: string) {
    this.itemsChild.forEach((item, index) => {
      if (item.id === id) {
        this.itemsChild.splice(index, 1);
        this.itemService.deleteItem(id);
      }
    });
  }

  createItem(item: Item) {
    const newItem$: Observable<Item> = this.itemService.createItem(item);
    newItem$.subscribe(res => {
      console.log(res);
      // @ts-ignore
      this.itemsChild.push(res.item);
    });
  }

  ngOnInit() {
  }

}
