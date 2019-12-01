import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ContractorsComponent } from './contractors/contractors.component';
import { OrdersComponent } from './orders/orders.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import {NgxPaginationModule} from 'ngx-pagination';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ContractorsComponent,
    OrdersComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
