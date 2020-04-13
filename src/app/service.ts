import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject, throwError, Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { Empresa } from "./model/empresa.model";
import { FormGroup } from "@angular/forms";
// import { AuthUser } from "./auth-user.model";


@Injectable({ providedIn: "root" })
export class BackEndService {

    private authStatusListener = new Subject<boolean>();

    constructor(private http: HttpClient, private router: Router) { }

    getEmpresa() {
        return this.http.get("http://localhost:3000/api/getEmpresa")
            .
            pipe(
                map((data: Empresa[]) => {
                    return data;
                }), catchError(error => {
                    return throwError('Something went wrong!');
                })
            )
    }

    createClient(form: any) {
        const cliente = form;
        return this.http.post("http://localhost:3000/api/saveClient", cliente).
            pipe(
                map((data: any) => {
                    return data;
                }), catchError(error => {
                    return throwError('Something went wrong!');
                })
            );
    }

    getClient(form: any) {
        const cedula = form.cedula;
        return this.http.get("http://localhost:3000/api/getClient/" + cedula).
            pipe(
                map((data: any) => {
                    return data;
                }), catchError(error => {
                    return throwError('Something went wrong!');
                })
            );
    }
}
