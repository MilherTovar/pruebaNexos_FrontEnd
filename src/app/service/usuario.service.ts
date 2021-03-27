import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioLogueo } from '../interfaces/UsuarioLogueo';

@Injectable({
    providedIn:'root'
})

export class UsuarioService{

    private apiv1='http://localhost:8080/auth/';

    constructor(
        private http:HttpClient
    ){}

    logueousuario(usuario:UsuarioLogueo):Observable<any>{
        const headers={'content-type':'application/json'}
        const body=JSON.stringify(usuario);
        const path=`${this.apiv1}/login`;
        return this.http.post(path,body,{'headers':headers})
    }
}