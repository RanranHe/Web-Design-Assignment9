// Modules
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { DatePipe } from '@angular/common'; // use for transform data format

// Components
import {AppComponent} from './app.component';
import {ItemListComponent} from './item-list/item-list.component';
import {ItemComponent} from './item/item.component';
import {ItemViewComponent} from './item-view/item-view.component';
import {ItemCreateComponent} from './item-create/item-create.component';

// Services
import {ItemService} from './services/item.service';


@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemComponent,
    ItemViewComponent,
    ItemCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ItemService, DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
