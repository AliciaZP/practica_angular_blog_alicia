import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private arrPosts: Post[];

  constructor() {
    this.arrPosts = [{
      titulo: 'Los gatos y su comportamiento',
      texto: 'Los gatos, esos enigmáticos compañeros de cuatro patas, han cautivado a los humanos durante milenios con su gracia, independencia y misterioso comportamiento. Aunque cada gato es único, hay ciertos patrones de comportamiento que son comunes en la mayoría de estos felinos fascinantes.Los gatos, esos enigmáticos compañeros de cuatro patas, han cautivado a los humanos durante milenios con su gracia, independencia y misterioso comportamiento. Aunque cada gato es único, hay ciertos patrones de comportamiento que son comunes en la mayoría de estos felinos fascinantes.Los gatos, esos enigmáticos compañeros de cuatro patas, han cautivado a los humanos durante milenios con su gracia, independencia y misterioso comportamiento. Aunque cada gato es único, hay ciertos patrones de comportamiento que son comunes en la mayoría de estos felinos fascinantes.Los gatos, esos enigmáticos compañeros de cuatro patas, han cautivado a los humanos durante milenios con su gracia, independencia y misterioso comportamiento. Aunque cada gato es único, hay ciertos patrones de comportamiento que son comunes en la mayoría de estos felinos fascinantes.',
      autor: 'Alicia',
      imagen: 'https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg',
      fecha: new Date(2023, 1, 30),
      categoria: 'Razas de Gatos'
    },
    {
      titulo: 'Razas de gatos populares',
      texto: 'Descubre las características únicas de algunas de las razas de gatos más populares en todo el mundo.',
      autor: 'Alicia',
      imagen: 'https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg',
      fecha: new Date(2013, 1, 30),
      categoria: 'Razas de Gatos'
    },
    {
      titulo: 'Consejos para cuidar a tu gato en casa',
      texto: 'Aprende cómo proporcionar el mejor cuidado posible a tu gato dentro de tu hogar, desde la alimentación hasta el juego.',
      autor: 'Paco',
      imagen: 'https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg',
      fecha: new Date(2000, 1, 30),
      categoria: 'Cuidado del Gato'
    },
    {
      titulo: 'Curiosidades felinas',
      texto: 'Explora curiosidades divertidas y sorprendentes sobre la vida de los gatos que quizás no conocías.',
      autor: 'Paco',
      imagen: 'https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg',
      fecha: new Date(1990, 1, 30),
      categoria: 'Curiosidades'
    },
    {
      titulo: 'Gatos y su relación con los humanos',
      texto: 'Analiza la conexión especial entre los gatos y los humanos a lo largo de la historia y en la actualidad.',
      autor: 'Anónimo',
      imagen: 'https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg',
      fecha: new Date(2020, 1, 30),
      categoria: 'Cuidado del Gato'
    }]
  }

  create(pPost: Post) {
    this.arrPosts.push(pPost)
  }

  getAll() {
    return this.arrPosts
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