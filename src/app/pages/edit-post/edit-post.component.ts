import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {

  postEdit: FormGroup
  postID: string = '';

  router = inject(Router)
  activatedRoute = inject(ActivatedRoute)
  postsService = inject(PostsService)

  constructor() {
    this.postEdit = new FormGroup({
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
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.postID = params['postID']
      const response = this.postsService.getById(this.postID)
      //hay que pasarle un objeto con los mismo campos que definimos en el form group
      const { titulo, texto, autor, imagen, fecha, categoria } = response
      this.postEdit.setValue({ titulo, texto, autor, imagen, fecha, categoria })
    })
  }

  onSubmit() {
    if (this.postEdit.valid) {
      this.postsService.updateById(this.postID, this.postEdit.value);
      Swal.fire({
        icon: 'success',
        title: 'Post editado correctamente',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#008000',
        color: 'white',
        background: 'black',
      });
      this.router.navigate(['/posts']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Datos editados erróneos',
        text: 'Por favor, completa todos los campos del post de forma correcta.',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#FF0000',
        color: 'white',
        background: 'black',
      });
    }
  }

  checkError(controlName: string, errorName: string) {
    return this.postEdit.get(controlName)?.hasError(errorName) && this.postEdit.get(controlName)?.touched;
  }


}
