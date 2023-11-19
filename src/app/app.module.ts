import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from '@tinymce/tinymce-angular';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ListaPostsComponent } from './pages/lista-posts/lista-posts.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { CardPostComponent } from './components/card-post/card-post.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { DetallePostComponent } from './pages/detalle-post/detalle-post.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { ListaFavoritosComponent } from './pages/lista-favoritos/lista-favoritos.component';
import { FormLoginComponent } from './pages/form-login/form-login.component';
import { FormRegistroComponent } from './pages/form-registro/form-registro.component';
import { TeoriaComponent } from './pages/teoria/teoria.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPostsComponent,
    FormularioComponent,
    CardPostComponent,
    NavBarComponent,
    FooterComponent,
    EditPostComponent,
    DetallePostComponent,
    HomeComponent,
    ErrorComponent,
    ListaFavoritosComponent,
    FormLoginComponent,
    FormRegistroComponent,
    TeoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditorModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
