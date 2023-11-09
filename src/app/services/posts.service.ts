import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private arrPosts: Post[];

  constructor() {
    this.arrPosts = [{
      titulo: 'El impacto psicológico del color en el diseño',
      texto: 'Explora cómo los colores afectan nuestras emociones y percepciones en el diseño gráfico y visual.',
      autor: 'ColorExpert123',
      imagen: 'url_de_la_imagen_1.jpg',
      fecha: new Date(2023, 11, 9),
      categoria: 'Diseño Gráfico'
    },
    {
      titulo: 'Significados culturales de los colores alrededor del mundo',
      texto: 'Descubre cómo diferentes culturas interpretan y asignan significados a los colores en sus tradiciones y simbolismos.',
      autor: 'CulturalColors',
      imagen: 'url_de_la_imagen_2.jpg',
      fecha: new Date(2020, 8, 31),
      categoria: 'Cultura y Arte'
    },
    {
      titulo: 'Cómo elegir colores para transmitir emociones en marketing',
      texto: 'Consejos prácticos para seleccionar colores efectivos que comuniquen la identidad de una marca y conecten con el público.',
      autor: 'MarketingColors',
      imagen: 'url_de_la_imagen_3.jpg',
      fecha: new Date(2021, 3, 10),
      categoria: 'Marketing y Branding'
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

  ordenarPorTitulo() {
    return this.arrPosts.slice().sort((a, b) => a.titulo.localeCompare(b.titulo));
  }

  //el metodo local compare no funciona con el tipo date, asi que hay que usar esta funcion
  orderByDate(ascendente: boolean) {
    this.arrPosts = this.arrPosts.sort((a, b) => {
      const fechaA = new Date(a.fecha).getTime();
      const fechaB = new Date(b.fecha).getTime();

      return ascendente ? fechaB - fechaA : fechaA - fechaB;
    });
  }
}

