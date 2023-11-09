import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  nuevoPost: FormGroup;
  postsService = inject(PostsService)

  constructor() {
    this.nuevoPost = new FormGroup({
      titulo: new FormControl(),
      texto: new FormControl(),
      autor: new FormControl(),
      imagen: new FormControl(),
      fecha: new FormControl(),
      categoria: new FormControl(),
    })
  }

  onSubmit() { }

}


/* - Este componente representa un formulario con los diferentes campos del modelo Post.
- Cuando pulsemos el botón enviar, el formulario debe mandar al servicio la información del nuevo Post para que se almacene junto a los 
demás.
 */