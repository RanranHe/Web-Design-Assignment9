import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Item} from '../models/item';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {ItemService} from '../services/item.service';
import {ItemListComponent} from '../item-list/item-list.component';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})

export class ItemViewComponent implements OnInit {
  @Input() itemListComponent: ItemListComponent;
  @Input() item: Item;
  // @Output() updateItemEmitted: EventEmitter<Item> = new EventEmitter<Item>();

  private itemForm: FormGroup;
  // private title;
  // private content;
  // private date_modified;

  constructor(private itemService: ItemService) {
    this.itemForm = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      date_modified: new FormControl(),
      date_created: new FormControl()
    });

  }

  ngOnInit() {
    this.showDetails();
  }

  showDetails() {
    this.itemForm.patchValue({
      title: this.item.title,
      content: this.item.content,
      date_modified: this.item.modifiedDate,
      date_created: this.item.createdDate
    });
  }

  updateItemInfo() {
    const title = this.itemForm.get('title').value;
    const content = this.itemForm.get('content').value;

    this.itemListComponent.updateItem(this.item.id, title, content);
  }
}
