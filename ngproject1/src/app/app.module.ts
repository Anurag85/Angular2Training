import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ShoppingModule } from './shopping/shopping.module';
import { AppComponent } from './app.component';
import { HeaderComponent} from './header.component';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ShoppingModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
