import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private arrUsuarios: Usuario[] = [];
  private usuarioIdentificado: Usuario | null = null;

  //Para poder registrarse tiene que verificar si el correo o el username ya están registrados en la base de datos (en este caso local host)
  registrarUsuario(datosRegistro: Usuario): boolean {
    const usuarioExiste = this.arrUsuarios.find(
      usuario => usuario.username === datosRegistro.username || usuario.email === datosRegistro.email
    );

    if (usuarioExiste) {
      console.error('Ya existe un usuario con este nombre de usuario o correo electrónico. No se puede registrar.');
      return false;
    }

    this.arrUsuarios.push(datosRegistro);
    localStorage.setItem('usuarios', JSON.stringify(this.arrUsuarios));

    return true;
  }



  loginUsuario(datosLogin: Usuario): boolean {
    const usuarioEncontrado = this.arrUsuarios.find(
      usuario => usuario.email === datosLogin.email && usuario.password === datosLogin.password
    );

    if (usuarioEncontrado) {
      this.usuarioIdentificado = usuarioEncontrado
      return true;
    } else {
      console.error('El nombre de usuario y la contraseña no coinciden');
      return false;
    }
  }

  isLogged(): boolean {
    return this.usuarioIdentificado !== null;
  }
}

