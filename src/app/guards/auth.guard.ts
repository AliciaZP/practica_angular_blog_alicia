import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

    //este inject aqui es una funcion, no es una clase por ello no hay que llamarla con this. 
    const router = inject(Router);


    if (localStorage.getItem('usuarios')) {
        return true;
    } else {
        router.navigate(['/login'])
        return false;
    }
};

