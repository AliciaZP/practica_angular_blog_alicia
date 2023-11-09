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


  ngOnInit() {
    this.arrPosts = this.postsServices.getAll();
    this.arrCategorias = this.postsServices.getCategorias();
  }

  onChange($event: any) {
    this.arrPosts = this.postsServices.getByCategoria($event.target.value);
  };

}

