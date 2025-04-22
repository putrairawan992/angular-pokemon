import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // ⬅️ Tambahkan ini
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule // ⬅️ Tambahkan ini
  ],
  providers: [],
})
export class AppModule {}
