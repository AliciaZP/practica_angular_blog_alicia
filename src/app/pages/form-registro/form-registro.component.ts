import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent {

  nuevoRegistro: FormGroup;
  router = inject(Router)
  usuariosService = inject(UsuariosService)

  constructor() {
    this.nuevoRegistro = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      fecha_nacimiento: new FormControl(),
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  onSubmit() {
    const registroCorrecto = this.usuariosService.registrarUsuario(this.nuevoRegistro.value);

    if (registroCorrecto) {
      Swal.fire({
        icon: 'success',
        title: 'Usuario registrado',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#008000',
        color: 'white',
        background: 'black',
      });
      this.router.navigate(['/login']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error en el registro',
        text: 'El nombre de usuario / correo electrónico ya están registrados. Vuelva a intentarlo.',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#FF0000',
        color: 'white',
        background: 'black',
      });
    }
  }
}




