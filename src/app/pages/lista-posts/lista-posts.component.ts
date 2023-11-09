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

  onChangeTitulo($event: any) {
    const ascendente = $event.target.value === "A-Z";
    this.arrPosts = this.postsServices.orderByTitulo(ascendente);
    //si el value no corresponde, la funcion ejectua en orden descendente
  }

  onChangeFecha($event: any) {
    const ascendente = $event.target.value === "reciente";
    this.arrPosts = this.postsServices.orderByDate(ascendente);
  } //si el value no corresponde, la funcion ejectua en orden descendente


  onPostBorrado($event: string) {
    const response = this.postsServices.deleteByTitulo($event)
    this.arrPosts = this.postsServices.getAll();
  }


}
