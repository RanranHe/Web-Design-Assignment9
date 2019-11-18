// Modules
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
// Components
import {AppComponent} from './app.component';
import {ItemListComponent} from './item-list/item-list.component';
import {ItemComponent} from './item/item.component';
import {ItemViewComponent} from './item-view/item-view.component';
import {ItemUpdateComponent} from './item-update/item-update.component';
import {ReactiveFormsModule} from '@angular/forms';

// Services
import {ItemService} from './services/item.service';


@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemComponent,
    ItemViewComponent,
    ItemUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
