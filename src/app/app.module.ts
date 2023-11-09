import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPostsComponent } from './pages/lista-posts/lista-posts.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { CardPostComponent } from './components/card-post/card-post.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaPostsComponent,
    FormularioComponent,
    CardPostComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
