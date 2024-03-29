import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { LoginComponent } from './components/login./login..component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieSearchComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
