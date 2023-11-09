import { Component, inject } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent {

  postsServices = inject(PostsService)

}


/* El siguiente elemento a definir es el componente ListaPosts
    - Se trata de un componente que, recibe del servicio todos los Post y los muestra de manera ordenada.
    - (opcional) Disponer de una serie de botones que nos permitan filtrar por categoría. */