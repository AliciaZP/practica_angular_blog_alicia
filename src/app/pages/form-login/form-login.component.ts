import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  nuevoLogin: FormGroup;
  router = inject(Router)
  usuariosService = inject(UsuariosService)

  constructor() {
    this.nuevoLogin = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    })
  }

  onSubmit() {
    const loginCorrecto = this.usuariosService.loginUsuario(this.nuevoLogin.value);

    if (loginCorrecto) {
      Swal.fire({
        icon: 'success',
        title: 'Login correcto',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#008000',
        color: 'white',
        background: 'black',
      });
      this.router.navigate(['/home']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error en el login',
        text: 'El email o la contraseña no son válidos.',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#FF0000',
        color: 'white',
        background: 'black',
      });
    }
  }
}




