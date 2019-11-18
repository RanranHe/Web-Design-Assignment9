import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Item} from '../models/item';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {ItemService} from '../services/item.service';
import {ItemListComponent} from '../item-list/item-list.component';

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.scss']
})

export class ItemUpdateComponent implements OnInit {
  @Input() itemListComponent: ItemListComponent;
  @Input() item: Item;
  @Output() updateItemEmitted: EventEmitter<Item> = new EventEmitter<Item>();

  private itemForm: FormGroup;
  private title;
  private content;
  private date_modified;

  //  contact:Contact;

  constructor(private itemService: ItemService) {
    this.itemForm = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl()
    });

  }

  saveContactInfo() {
    console.log('save');
    this.title = this.itemForm.get('title').value;
    this.content = this.itemForm.get('content').value;
    this.date_modified = new Date();

    // let item = new Item(this.title, this.content, this.date_modified, this.phone);
    // console.log(item);
    // const item = new Item(this.item.id, this.title, this.content, this.date_modified, this.item.createdDate);
    this.itemService.updateItem(this.item.id, this.title, this.content).subscribe(() => {
      this.itemListComponent.updateItem(this.item.id, this.title, this.content);
    });
    // const items$: Observable<Array<Item>> = this.itemService.getItems();
    // items$.subscribe(items => {
    //   this.itemListComponent.itemsChild = items;
    // });

    this.clear();
    location.reload(true);


  }

  clear() {
    this.itemForm.patchValue({
      first: '',
      last: '',
      email: '',
      phone: ''
    });
  }

  ngOnInit() {

  }


}
