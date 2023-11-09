import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrPosts: Post[] = [];

  constructor() { }

  create() { }
  getAll() { }
  getByCategoria() { }

}
