import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      titulo: new FormControl(null, [Validators.required, Validators.minLength(3),
      Validators.maxLength(70)]),
      texto: new FormControl(null, [Validators.required, Validators.minLength(1000)]),
      autor: new FormControl(null, [Validators.required, Validators.minLength(3),
      Validators.maxLength(30)]),
      imagen: new FormControl(null, [Validators.required]),
      fecha: new FormControl(null, [Validators.required]),
      categoria: new FormControl(null, [Validators.required, Validators.minLength(3),
      Validators.maxLength(30)]),
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
    if (this.nuevoPost.valid) {
      this.postsService.create(this.nuevoPost.value);
      Swal.fire({
        icon: 'success',
        title: 'Post creado correctamente',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#008000',
        color: 'white',
        background: 'black',
      });
      this.router.navigate(['/posts']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Datos erróneos',
        text: 'Por favor, completa todos los campos del post de forma correcta.',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#FF0000',
        color: 'white',
        background: 'black',
      });
    }
  }

  checkError(controlName: string, errorName: string) {
    return this.nuevoPost.get(controlName)?.hasError(errorName) && this.nuevoPost.get(controlName)?.touched;
  }

}

