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
      texto: 'Explora el fascinante mundo del comportamiento de los gatos y cómo se comunican con nosotros.',
      autor: 'Alicia',
      imagen: 'url_de_la_imagen_1.jpg',
      fecha: new Date(2023, 1, 30),
      categoria: 'Razas de Gatos'
    },
    {
      titulo: 'Razas de gatos populares',
      texto: 'Descubre las características únicas de algunas de las razas de gatos más populares en todo el mundo.',
      autor: 'Alicia',
      imagen: 'url_de_la_imagen_2.jpg',
      fecha: new Date(2013, 1, 30),
      categoria: 'Razas de Gatos'
    },
    {
      titulo: 'Consejos para cuidar a tu gato en casa',
      texto: 'Aprende cómo proporcionar el mejor cuidado posible a tu gato dentro de tu hogar, desde la alimentación hasta el juego.',
      autor: 'Paco',
      imagen: 'url_de_la_imagen_3.jpg',
      fecha: new Date(2000, 1, 30),
      categoria: 'Cuidado del Gato'
    },
    {
      titulo: 'Curiosidades felinas',
      texto: 'Explora curiosidades divertidas y sorprendentes sobre la vida de los gatos que quizás no conocías.',
      autor: 'Paco',
      imagen: 'url_de_la_imagen_4.jpg',
      fecha: new Date(1990, 1, 30),
      categoria: 'Curiosidades'
    },
    {
      titulo: 'Gatos y su relación con los humanos',
      texto: 'Analiza la conexión especial entre los gatos y los humanos a lo largo de la historia y en la actualidad.',
      autor: 'Anónimo',
      imagen: 'url_de_la_imagen_5.jpg',
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
}

