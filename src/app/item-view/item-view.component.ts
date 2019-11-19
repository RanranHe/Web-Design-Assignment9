import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Item} from '../models/item';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {ItemService} from '../services/item.service';
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
  // private title;
  // private content;
  // private date_modified;

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

  showDetails() {
    this.itemForm.patchValue({
      title: this.item.title,
      content: this.item.content,
      date_modified: this.datePipe.transform(this.item.modifiedDate, 'yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\''),
      date_created: this.item.createdDate
    });
  }

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
