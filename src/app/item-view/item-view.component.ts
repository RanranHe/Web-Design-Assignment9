import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Item} from '../models/item';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ItemListComponent} from '../item-list/item-list.component';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})


export class ItemViewComponent implements OnInit {
  @Input() itemListComponent: ItemListComponent;
  @Input() item: Item;

  private itemForm: FormGroup;


  constructor(private datePipe: DatePipe) {
    this.itemForm = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      date_modified: new FormControl(),
      date_created: new FormControl()
    });

  }

  ngOnInit() {
    this.showDetails();
    console.log(this.datePipe.transform(new Date(), 'yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\''));
  }

  // parse value to form
  showDetails() {
    this.itemForm.patchValue({
      title: this.item.title,
      content: this.item.content,
      date_modified: this.datePipe.transform(this.item.modifiedDate, 'yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\''),
      date_created: this.item.createdDate
    });
  }

  /**
   * update item
   * send request to item list
   */
  updateItemInfo() {
    if (confirm('Are you sure you want to update this item?')) {
      const title = this.itemForm.get('title').value;
      const content = this.itemForm.get('content').value;
      const modified_date = new Date();
      this.itemListComponent.updateItem(this.item.id, title, content, modified_date);
      this.itemForm.patchValue({
        date_modified: this.datePipe.transform(modified_date, 'yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\'')
      });
    } else {
      return;
    }
  }
}
