import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { FavoritosService } from 'src/app/services/favoritos.service';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-lista-favoritos',
  templateUrl: './lista-favoritos.component.html',
  styleUrls: ['./lista-favoritos.component.css']
})
export class ListaFavoritosComponent {
  postsServices = inject(PostsService)
  postsFavoritos = inject(FavoritosService)
  activatedRoute = inject(ActivatedRoute)

  postFavorito!: Post
  arrFavoritos: Post[] = []
  arrCategorias: string[] = []
  arrAutores: string[] = []

  ngOnInit() {
    this.arrFavoritos = this.postsFavoritos.getFavs();
    this.arrCategorias = this.postsServices.getCategorias();
    this.arrAutores = this.postsServices.getAutores();
    this.activatedRoute.params.subscribe((params) => {

      const response = this.postsFavoritos.getByTitulo(params['postTITLE']);
      this.postFavorito = response
    });
  }

  onPostBorrado($event: string) {
    const response = this.postsServices.deleteById($event)
    this.arrFavoritos = this.postsServices.getAll();
  }

  onChangeCategoria($event: any) {
    this.arrFavoritos = $event.target.value === "" ? this.postsFavoritos.getFavs() : this.postsFavoritos.getByCategoria($event.target.value);
  };


  onChangeAutor($event: any) {
    this.arrFavoritos = $event.target.value === "" ? this.postsFavoritos.getFavs() : this.postsFavoritos.getByAutor($event.target.value);
  }

  onChangeTitulo($event: any) {
    const ascendente = $event.target.value === "A-Z";
    this.arrFavoritos = this.postsFavoritos.orderByTitulo(ascendente);
    //si el value no corresponde, la funcion ejectua en orden descendente
  }

  onChangeFecha($event: any) {
    const ascendente = $event.target.value === "reciente";
    this.arrFavoritos = this.postsFavoritos.orderByDate(ascendente);
  } //si el value no corresponde, la funcion ejectua en orden descendente


}
