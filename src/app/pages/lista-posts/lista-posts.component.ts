import { Component, inject } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent {

  postsServices = inject(PostsService)

  arrPosts: Post[] = []
  arrCategorias: string[] = []
  arrAutores: string[] = []

  ngOnInit() {
    this.arrPosts = this.postsServices.getAll();
    this.arrCategorias = this.postsServices.getCategorias();
    this.arrAutores = this.postsServices.getAutores();
  }

  onChangeCategoria($event: any) {
    this.arrPosts = $event.target.value === "" ? this.postsServices.getAll() : this.postsServices.getByCategoria($event.target.value);
  };


  onChangeAutor($event: any) {
    this.arrPosts = $event.target.value === "" ? this.postsServices.getAll() : this.postsServices.getByAutor($event.target.value);
  }

  onChangeFecha($event: any) {
    if ($event.target.value === "reciente") {
      // Más reciente a más antiguo
      this.postsServices.orderByDate(true);
    } else if ($event.target.value === "antiguo") {
      // Más antiguo a más reciente
      this.postsServices.orderByDate(false);
    }
  }
}
