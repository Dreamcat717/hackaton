import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { QuestionsComponent } from './components/questions/questions.component';
import { VideosComponent } from './components/videos/videos.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    VideosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
