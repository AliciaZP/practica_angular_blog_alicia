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

  editorConfig: any;

  constructor() {
    this.nuevoPost = new FormGroup({
      titulo: new FormControl(),
      texto: new FormControl(),
      autor: new FormControl(),
      imagen: new FormControl(),
      fecha: new FormControl(),
      categoria: new FormControl(),
    })

    this.editorConfig = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean']
      ]
    };
  }


  onSubmit() {
    const response = this.postsService.create(this.nuevoPost.value)
    console.log(response);
    Swal.fire({
      icon: "success",
      title: "Post creado",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#008000",
      color: "white",
      background: "black",
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