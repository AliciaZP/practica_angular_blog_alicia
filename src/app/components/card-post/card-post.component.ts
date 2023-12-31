import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { FavoritosService } from 'src/app/services/favoritos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent {


  router = inject(Router)
  @Input() post: Post;
  @Input() botonActivo: boolean = true;

  @Output() borrarPostOutput: EventEmitter<string> = new EventEmitter();
  @Output() favoritoPostOutput: EventEmitter<string> = new EventEmitter();

  favoritosService = inject(FavoritosService)

  constructor() {
    this.post = {
      id: "",
      titulo: "",
      texto: "",
      autor: "",
      imagen: "",
      fecha: "",
      categoria: "",
    }
  }

  onClickFavorito(post: any) {
    this.favoritosService.agregarFavorito(post);
    this.favoritoPostOutput.emit(this.post.id);
    this.router.navigate(['/favoritos'])
  }


  async onClickDelete() {
    const result = await Swal.fire({
      title: "Borrar post",
      text: "¿Quieres borrar el post?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#008000",
      cancelButtonColor: "#FF0000",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
      color: "white",
      background: "black",
    })
    if (result.isConfirmed) {
      this.borrarPostOutput.emit(this.post.id);
      this.router.navigate(['/posts'])
    }
  }
}

