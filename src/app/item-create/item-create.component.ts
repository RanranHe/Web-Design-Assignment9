import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Item} from '../models/item';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {ItemService} from '../services/item.service';
import {ItemListComponent} from '../item-list/item-list.component';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.scss']
})

export class ItemCreateComponent implements OnInit {
  @Input() itemListComponent: ItemListComponent; // passing item-list in order to pass requests

  private itemForm: FormGroup;

  // constructor
  constructor() {
    this.itemForm = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      date_modified: new FormControl(),
      date_created: new FormControl()
    });
  }

  ngOnInit() {
  }

  /**
   * passing request to item-list
   * create item
   */
  createItem() {
    const title = this.itemForm.get('title').value;
    const content = this.itemForm.get('content').value;
    const newItem = new Item(title, content);
    this.itemListComponent.createItem(newItem);
    this.clear();
  }

  // empty the inputs
  clear() {
    this.itemForm.patchValue({
      title: '',
      content: ''
    });
  }
}
