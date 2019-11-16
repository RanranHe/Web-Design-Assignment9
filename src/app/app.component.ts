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

  stickiesParent: Array<Item>;

  constructor(stickyService: ItemService) {
    const stickies$: Observable<Array<Item>> = stickyService.getStickies();
    stickies$.subscribe(stickies => {
      this.stickiesParent = stickies;
    });
  }

  addSticky(sticky: Item) {
    this.stickiesParent.push(sticky);
  }
}
