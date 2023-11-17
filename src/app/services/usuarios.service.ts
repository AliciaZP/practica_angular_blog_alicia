import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  /*   private httpClient = inject(HttpClient)
    private baseURL: string = 'https://crmempleados.ngrok.io/api/usuarios/'
  
    registrarUsuario(body: Usuario) {
      return firstValueFrom(
        this.httpClient.post<RegisterResponse>(`${this.baseURL}/registro`, body))
    }
  
    loginUsuario(body: Usuario) {
      return firstValueFrom(
        this.httpClient.post<LoginResponse>(`${this.baseURL}/login`, body))
    }
  
    isLogged(): boolean {
      if (localStorage.getItem('auth_token')) return true;
      else return false;
  
      //return localStorage.getItem('auth_token') ? true : false; Es la forma de hacer ternario
  
    } */
}

