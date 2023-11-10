import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  nuevoPost: FormGroup;
  postsService = inject(PostsService)

  router = inject(Router)

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

  onSubmit() {
    const response = this.postsService.create(this.nuevoPost.value)
    console.log(response);
    Swal.fire({
      icon: "success",
      title: "Post creado",
      confirmButtonText: "Aceptar",
    });
    this.router.navigate(['/posts'])
  }

  /*   async onSubmit() {
    try {
      const response = await this.empleadosService.create(this.nuevoEmpleado.value)
      console.log(response);
      await Swal.fire({
        icon: "success",
        title: "Empleado creado",
        confirmButtonText: "Aceptar",
      });
      this.router.navigate(['/empleados'])


    } catch (e: any) {
      this.errors = e.errors;
    }


  }
   */

}
/* - Este componente representa un formulario con los diferentes campos del modelo Post.
- Cuando pulsemos el botón enviar, el formulario debe mandar al servicio la información del nuevo Post para que se almacene junto a los 
demás.
 */