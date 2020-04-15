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
    private isAuthenticated = false;
    private sucursal_id: string;
    private token: string;
    private tokenTimer: any;
    private userId: string;
    public userName: string;

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


    getSucursal() {
        return this.sucursal_id;
    }

    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }

    login() {
        return this.http.get("http://localhost:3000/api/getSucursal/").
            pipe(
                map((data: any) => {
                    return data;
                }), catchError(error => {
                    return throwError('Something went wrong!');
                })
            );
    }

    autoAuthUser() {
        const authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        const now = new Date();
        const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.sucursal_id = authInformation.sucursal;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    }

    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        this.sucursal_id = null;
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(["/"]);
    }

    private setAuthTimer(duration: number) {
        console.log("Setting timer: " + duration);
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration * 1000);
    }

    private saveAuthData(token: string, expirationDate: Date, sucID: string) {
        localStorage.setItem("sucursal", sucID);
        localStorage.setItem("expiration", expirationDate.toISOString());
        localStorage.setItem("token", token);
    }

    private clearAuthData() {
        localStorage.removeItem("sucursal");
        localStorage.removeItem("expiration");
        localStorage.removeItem("token");
    }

    private getAuthData() {
        const sucursal = localStorage.getItem("sucursal");
        const expirationDate = localStorage.getItem("expiration");
        const token = localStorage.getItem("token");
        if (!expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            sucursal: sucursal
        }
    }

    getInventario(form: string) {
        const sucID = form;
        return this.http.get("http://localhost:3000/api/getInventario/" + sucID).
            pipe(
                map((data: any) => {
                    return data;
                }), catchError(error => {
                    return throwError('Something went wrong!');
                })
            );
    }
}
