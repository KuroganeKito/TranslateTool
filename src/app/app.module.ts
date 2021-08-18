import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GlobalService } from './shared/global.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ParagraphsListComponent } from './paragraphs-list/paragraphs-list.component';
import { DictionaryAreaComponent } from './dictionary-area/dictionary-area.component';
import { ParagraphComponent } from './paragraphs-list/paragraph/paragraph.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ParagraphsListComponent,
    DictionaryAreaComponent,
    ParagraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
