import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
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
    router = inject(Router);
    usuariosService = inject(UsuariosService);

    constructor() {
        this.nuevoRegistro = new FormGroup({
            nombre: new FormControl(null, [Validators.required, Validators.minLength(2),
            Validators.maxLength(30)]),
            apellidos: new FormControl(null, [Validators.required, Validators.minLength(3),
            Validators.maxLength(70)]),
            fecha_nacimiento: new FormControl(null, [Validators.required]),
            username: new FormControl(null, [Validators.required, this.usernameValidator]),
            email: new FormControl(null, [Validators.required, Validators.pattern(/^[\w.-]+@[\w.-]+.[\w.-]+$/)]),
            password: new FormControl(null, [Validators.required, this.passwordValidator]),
        })
    }


    onSubmit() {
        if (this.nuevoRegistro.valid) {
            this.usuariosService.registrarUsuario(this.nuevoRegistro.value);

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


    usernameValidator(control: AbstractControl) {
        const value = control.value;

        if (!value) {
            return null;
        }

        const formatoValido = /^[a-zA-Z0-9_]+$/.test(value);
        const longitudValida = value.length >= 3 && value.length <= 20;
        const usernameValido = formatoValido && longitudValida;

        return usernameValido ? null : { usernamevalidator: true };
    };




    passwordValidator(control: AbstractControl) {
        const value = control.value;

        if (!value) {
            return null;
        }

        const incluyeMayus = /[A-Z]/.test(value);
        const incluyeNum = /\d/.test(value);
        const incluyeSimbol = /[!@#$%^&*(),.?":{}|<>]/.test(value);
        const longitudValida = value.length <= 20;
        const passwordValida = incluyeMayus && incluyeNum && incluyeSimbol && longitudValida;
        return passwordValida ? null : { passwordvalidator: true };
    }


    checkError(controlName: string, errorName: string) {
        return this.nuevoRegistro.get(controlName)?.hasError(errorName) && this.nuevoRegistro.get(controlName)?.touched;
    }

}
