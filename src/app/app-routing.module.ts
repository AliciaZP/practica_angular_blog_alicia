import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPostsComponent } from './pages/lista-posts/lista-posts.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { DetallePostComponent } from './pages/detalle-post/detalle-post.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { ListaFavoritosComponent } from './pages/lista-favoritos/lista-favoritos.component';
import { FormLoginComponent } from './pages/form-login/form-login.component';
import { FormRegistroComponent } from './pages/form-registro/form-registro.component';
import { TeoriaComponent } from './pages/teoria/teoria.component';
import { CreadoresComponent } from './pages/creadores/creadores.component';
import { authGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'teoria', component: TeoriaComponent },
  { path: 'creadores', component: CreadoresComponent },
  { path: 'posts', component: ListaPostsComponent },
  { path: 'posts/edit/:postID', component: EditPostComponent, canActivate: [authGuard] },
  { path: 'posts/:postID', component: DetallePostComponent },
  { path: 'favoritos', component: ListaFavoritosComponent, canActivate: [authGuard] },
  { path: 'new', component: FormularioComponent, canActivate: [authGuard] },
  { path: 'register', component: FormRegistroComponent },
  { path: 'login', component: FormLoginComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }