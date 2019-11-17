import { Component } from '@angular/core';
import { Item } from './models/item';
import { ItemService } from './services/item.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  itemsParent: Array<Item>;

  constructor(itemService: ItemService) {
    const stickies$: Observable<Array<Item>> = itemService.getStickies();
    stickies$.subscribe(stickies => {
      this.itemsParent = stickies;
    });
  }

  addItem(item: Item) {
    this.itemsParent.push(item);
  }
}
