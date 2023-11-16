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


  getByTitulo(pTitulo: string): Post {
    const postsEncontrados = this.arrPosts.filter(post => post.titulo === pTitulo);
    // Devolver el primer post encontrado o un objeto Post vacío si no hay coincidencias
    return postsEncontrados.length > 0 ? postsEncontrados[0] : { titulo: '', texto: '', autor: '', imagen: '', fecha: new Date(), categoria: '' };
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

  deleteByTitulo(postTITLE: string) {
    this.arrPosts = this.arrPosts.filter(post => post.titulo !== postTITLE);
  }

  //es tipo void porque no necesita retornar nada
  updateByTitulo(postTITLE: string, formularioEdit: Post): void {
    //busco el índice del titulo que tiene mi post
    const postIndex = this.arrPosts.findIndex(post => post.titulo === postTITLE);

    //verifico si el post con ese titulo existe, si no se encuentra === -1
    if (postIndex !== -1) {
      //los ... son el spread operator que permite mezclar los datos nuevos(formularioEdit) con los existentes. Con esto solo se actualizan los que se han modificado
      this.arrPosts[postIndex] = { ...this.arrPosts[postIndex], ...formularioEdit };
    }
  }
}