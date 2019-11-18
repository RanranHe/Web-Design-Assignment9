import {Component} from '@angular/core';
import {Item} from './models/item';
import {ItemService} from './services/item.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  itemsParent: Map<string, Item>;

  constructor(itemService: ItemService) {
    const stickies$: Observable<Array<Item>> = itemService.getItems();
    stickies$.subscribe(items => {
      items.forEach(item => {
        this.itemsParent.set(item.id, item);
      });
    });
  }

  // addItem(item: Item) {
  //   this.itemsParent.set(item);
  // }
}
