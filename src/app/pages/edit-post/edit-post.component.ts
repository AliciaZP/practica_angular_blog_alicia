import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {

  formularioEdit: FormGroup
  postTITLE: string = '';

  router = inject(Router)
  activatedRoute = inject(ActivatedRoute)
  postsService = inject(PostsService)

  constructor() {
    this.formularioEdit = new FormGroup({
      titulo: new FormControl(),
      texto: new FormControl(),
      autor: new FormControl(),
      imagen: new FormControl(),
      fecha: new FormControl(),
      categoria: new FormControl(),
    })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.postTITLE = params['postTITLE']
      const response = this.postsService.getByTitulo(this.postTITLE)
      //hay que pasarle un objeto con los mismo campos que definimos en el form group
      const { titulo, texto, autor, imagen, fecha, categoria } = response
      this.formularioEdit.setValue({ titulo, texto, autor, imagen, fecha, categoria })
    })
  }

  onSubmit() {
    this.postsService.updateByTitulo(this.postTITLE, this.formularioEdit.value)
    Swal.fire({
      icon: "success",
      title: "Post editado",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#6495ED",
    });
    this.router.navigate(['/posts'])
  }
}
