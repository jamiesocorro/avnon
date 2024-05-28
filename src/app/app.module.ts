import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LinkAttachmentsComponent } from './components/shared/link-attachments/link-attachments.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LinkAttachmentsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
