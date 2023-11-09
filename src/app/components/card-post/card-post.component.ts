import { Component, inject } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent {

  postsServices = inject(PostsService)
  arrPosts: Post[] = [];

  ngOnInit() {
    this.arrPosts = this.postsServices.getAll();
    console.log(this.postsServices.getAll());

  }
}
