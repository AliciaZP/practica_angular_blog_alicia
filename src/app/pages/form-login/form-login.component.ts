import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  onSubmit() {
    const response = this.usuariosService.loginUsuario(this.nuevoLogin.value)
    console.log(response);
    Swal.fire({
      icon: "success",
      title: "Login correcto",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#008000",
      color: "white",
      background: "black",
    });
    this.router.navigate(['/home'])
  }
}



