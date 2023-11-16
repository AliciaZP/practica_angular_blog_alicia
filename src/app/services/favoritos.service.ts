import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  private arrFavoritos: any[];

  constructor() {
    //si el array esta en el localstorage lo coges de ahi, si no haces un array vacio
    if (localStorage.getItem('array_favoritos')) {
      this.arrFavoritos = JSON.parse(localStorage.getItem('array_favoritos')!);
    } else {
      this.arrFavoritos = []
    }
  }


  getFavs() {
    return this.arrFavoritos;
  }

  agregarFavorito(pPost: any) {
    const postFound = this.arrFavoritos.find(post => post.titulo === pPost.titulo)
    if (postFound) {
      Swal.fire({
        icon: "info",
        title: "Ya es favorito",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#FFA500",
        color: "white",
        background: "black",
      });
    } else
      this.arrFavoritos.push(pPost);
    //guardo en Local Storage el valor de array
    localStorage.setItem('array_favoritos', JSON.stringify(this.arrFavoritos))
    return
  }

  eliminarFavorito(postTitulo: string) {
    //es para comprobar que los que su id no coincide con el dado pasan el filtro, olos demas no
    this.arrFavoritos = this.arrFavoritos.filter(fav => fav.titulo !== postTitulo);
  }


  getCategorias(): string[] {
    const categoriasSinOrdenar = [...new Set(this.arrFavoritos.map(post => post.categoria))];
    const categoriasOrdenadas = categoriasSinOrdenar.sort((a, b) => a.localeCompare(b));
    return categoriasOrdenadas;
  }

  getByCategoria(pCat: string): Post[] {
    return this.arrFavoritos.filter(post => post.categoria === pCat)
  }

  getAutores(): string[] {
    const autoresSinOrdenar = [...new Set(this.arrFavoritos.map(post => post.autor))];
    const autoresOrdenados = autoresSinOrdenar.sort((a, b) => a.localeCompare(b));
    return autoresOrdenados;
  }

  getByAutor(pAutor: string): Post[] {
    return this.arrFavoritos.filter(post => post.autor === pAutor)
  }


  getByTitulo(pTitulo: string): Post {
    const postsEncontrados = this.arrFavoritos.filter(post => post.titulo === pTitulo);
    // Devolver el primer post encontrado o un objeto Post vacío si no hay coincidencias
    return postsEncontrados.length > 0 ? postsEncontrados[0] : { titulo: '', texto: '', autor: '', imagen: '', fecha: new Date(), categoria: '' };
  }

  orderByTitulo(ascendente: boolean): Post[] {
    // Ordenar y devolver una nueva lista sin modificar la original
    return this.arrFavoritos.slice().sort((a, b) => {
      const comparacion = a.titulo.localeCompare(b.titulo);
      return ascendente ? comparacion : -comparacion;
    });
  }


  //el metodo local compare no funciona con el tipo date, asi que hay que usar esta funcion
  orderByDate(ascendente: boolean) {
    return this.arrFavoritos.slice().sort((a, b) => {
      const fechaA = new Date(a.fecha).getTime();
      const fechaB = new Date(b.fecha).getTime();

      return ascendente ? fechaB - fechaA : fechaA - fechaB;
    });
  }

  deleteByTitulo(postTITLE: string) {
    this.arrFavoritos = this.arrFavoritos.filter(post => post.titulo !== postTITLE);
  }

  //es tipo void porque no necesita retornar nada
  updateByTitulo(postTITLE: string, formularioEdit: Post): void {
    //busco el índice del titulo que tiene mi post
    const postIndex = this.arrFavoritos.findIndex(post => post.titulo === postTITLE);

    //verifico si el post con ese titulo existe, si no se encuentra === -1
    if (postIndex !== -1) {
      //los ... son el spread operator que permite mezclar los datos nuevos(formularioEdit) con los existentes. Con esto solo se actualizan los que se han modificado
      this.arrFavoritos[postIndex] = { ...this.arrFavoritos[postIndex], ...formularioEdit };
    }
  }














}


