import { Injectable } from '@angular/core';
import { POSTS } from '../db/posts.db'
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  //Los POSTS son una base de datos creada por mi, como los import no se pueden editar. Creo un array editable y trabajo sobre él a partir de la copia de POST
  private arrPosts: Post[] = [...POSTS];

  getAll() {
    return this.arrPosts;
  }


  create(pPost: Post) {
    const postsDB = localStorage.getItem('array_postcreados');
    if (postsDB) {
      this.arrPosts = JSON.parse(postsDB);
    }
    this.arrPosts.push(pPost);
    localStorage.setItem('array_postcreados', JSON.stringify(this.arrPosts));
  }


  getCategorias(): string[] {
    const categoriasSinOrdenar = [...new Set(this.arrPosts.map(post => post.categoria))];
    const categoriasOrdenadas = categoriasSinOrdenar.sort((a, b) => a.localeCompare(b));
    return categoriasOrdenadas;
  }

  getByCategoria(pCat: string): Post[] {
    return this.arrPosts.filter(post => post.categoria === pCat)
  }

  getAutores(): string[] {
    const autoresSinOrdenar = [...new Set(this.arrPosts.map(post => post.autor))];
    const autoresOrdenados = autoresSinOrdenar.sort((a, b) => a.localeCompare(b));
    return autoresOrdenados;
  }

  getByAutor(pAutor: string): Post[] {
    return this.arrPosts.filter(post => post.autor === pAutor)
  }

  orderByTitulo(ascendente: boolean): Post[] {
    // Ordenar y devolver una nueva lista sin modificar la original
    return this.arrPosts.slice().sort((a, b) => {
      const comparacion = a.titulo.localeCompare(b.titulo);
      return ascendente ? comparacion : -comparacion;
    });
  }


  //el metodo local compare no funciona con el tipo date, asi que hay que usar esta funcion
  orderByDate(ascendente: boolean) {
    return this.arrPosts.slice().sort((a, b) => {
      const fechaA = new Date(a.fecha).getTime();
      const fechaB = new Date(b.fecha).getTime();

      return ascendente ? fechaB - fechaA : fechaA - fechaB;
    });
  }


  getById(postID: string): Post {
    const postEncontrado = this.arrPosts.find(post => post.id === postID);
    return postEncontrado ? { ...postEncontrado } : { id: '', titulo: '', texto: '', autor: '', imagen: '', fecha: new Date(), categoria: '' };
  }

  deleteById(postID: string): void {
    this.arrPosts = this.arrPosts.filter(post => post.id !== postID);
  }

  updateById(postID: string, formularioEdit: Post): void {
    const postIndex = this.arrPosts.findIndex(post => post.id === postID);

    if (postIndex !== -1) {
      this.arrPosts[postIndex] = { ...this.arrPosts[postIndex], ...formularioEdit };
    }
  }

}