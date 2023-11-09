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
      fecha: '2023-11-09',
      categoria: 'Diseño Gráfico'
    },
    {
      titulo: 'Significados culturales de los colores alrededor del mundo',
      texto: 'Descubre cómo diferentes culturas interpretan y asignan significados a los colores en sus tradiciones y simbolismos.',
      autor: 'CulturalColors',
      imagen: 'url_de_la_imagen_2.jpg',
      fecha: '2023-11-10',
      categoria: 'Cultura y Arte'
    },
    {
      titulo: 'Cómo elegir colores para transmitir emociones en marketing',
      texto: 'Consejos prácticos para seleccionar colores efectivos que comuniquen la identidad de una marca y conecten con el público.',
      autor: 'MarketingColors',
      imagen: 'url_de_la_imagen_3.jpg',
      fecha: '2023-11-11',
      categoria: 'Marketing y Branding'
    }]
  }

  create(pPost: Post) {
    this.arrPosts.push(pPost)
  }

  getAll() {
    return this.arrPosts
  }

  getByCategoria(pCat: string): Post[] {
    return this.arrPosts.filter(post => post.categoria === pCat)
  }

}


/* 
- Dentro del servicio necesitamos definir un array como propiedad del mismo donde insertaremos los diferentes Post
- Dicho servicio dispondrá de un método create(Post) que nos permitirá agregar los Post cuando lo indiquemos desde el formulario
- Además incluiremos el método getAll para recuperar todos los Post de nuestro blog
- Y por último definiremos el método getByCategoria(cat) para que nos devuelva los post de una categoría concreta */