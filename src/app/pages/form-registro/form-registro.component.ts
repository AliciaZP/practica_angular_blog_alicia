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

  /*   nuevoRegistro: FormGroup;
    router = inject(Router)
    usuariosService = inject(UsuariosService)
   */
  /*   constructor() {
      this.nuevoRegistro = new FormGroup({
        email: new FormControl(),
        username: new FormControl(),
        password: new FormControl(),
      })
    }
  
    async onSubmit() {
      const response = await this.usuariosService.registrarUsuario(this.nuevoRegistro.value)
      if (response.success) {
        await Swal.fire({
          icon: "success",
          title: "Empleado registrado",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#3085d6",
        });
        this.router.navigate(['/login'])
  
      }
  
    } */
}

