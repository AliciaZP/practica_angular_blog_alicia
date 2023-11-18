import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'detalle-post',
  templateUrl: './detalle-post.component.html',
  styleUrls: ['./detalle-post.component.css']
})
export class DetallePostComponent {

  postSeleccionado!: Post

  postService = inject(PostsService)
  activatedRoute = inject(ActivatedRoute)

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {

      const response = this.postService.getById(params['postID']);
      this.postSeleccionado = response
    })
  }


}
