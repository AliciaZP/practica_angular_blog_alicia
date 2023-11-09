import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPostsComponent } from './pages/lista-posts/lista-posts.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { DetallePostComponent } from './pages/detalle-post/detalle-post.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/blog' },
  {
    path: 'blog',
  },
  { path: 'posts', component: ListaPostsComponent },
  { path: 'posts/edit/:POSTTITLE', component: EditPostComponent },
  { path: 'posts/:POSTTITLE', component: DetallePostComponent },
  { path: '/post/new', component: FormularioComponent },
  { path: '**', redirectTo: '/blog' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }