import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

import { RestserviceService } from './restservice.service';
import { BigvaluePipe } from './bigvalue.pipe';
import {HttpClientModule} from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    BigvaluePipe,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RestserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
