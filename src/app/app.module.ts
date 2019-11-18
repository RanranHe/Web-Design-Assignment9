// Modules
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
// Components
import {AppComponent} from './app.component';
import {ItemListComponent} from './item-list/item-list.component';
import {ItemComponent} from './item/item.component';
import {ItemUpdateComponent} from './item-update/item-update.component';
// import {StickyComponent} from './sticky/sticky.component';
// Services
import {ItemService} from './services/item.service';


@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemComponent,
    ItemUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
