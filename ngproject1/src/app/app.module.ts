import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ShoppingModule } from './shopping/shopping.module';
import { AppComponent } from './app.component';
import { HeaderComponent} from './header.component';
import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';
import { HomeComponent, ListComponent, NotFoundComponent, ManageComponent } from './routes.components';
import { ReversePipe } from './app.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListComponent,
    NotFoundComponent,
    ManageComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    ShoppingModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"", component: HomeComponent},
      {path:"list", component: ListComponent},
      {path:"manage", component: ManageComponent},
      {path:"**", component: NotFoundComponent}
    ])
  ],
  providers: [CartService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
