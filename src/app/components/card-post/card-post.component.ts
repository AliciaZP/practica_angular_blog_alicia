import { Component, Input, inject } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent {

  @Input() post: Post;
  @Input() botonActivo: boolean = true;

  constructor() {
    this.post = {
      titulo: "",
      texto: "",
      autor: "",
      imagen: "",
      fecha: "",
      categoria: "",
    }
  }

}
