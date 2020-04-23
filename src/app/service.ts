import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject, throwError, Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

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
                map((data) => {
                    return data;
                }), catchError(error => {
                    this.router.navigate["/"];
                    return throwError('Something went wrong!');
                })
            )
    }

    createClient(form: any) {
        const cliente = form;
        return this.http.post("http://localhost:3000/api/saveClient", cliente).
            pipe(
                map((data: any) => {
                    if (data.code != 500) {
                        return data;
                    } else {
                        this.onDbError();
                    }

                }), catchError(error => {
                    this.onDbError();
                    return throwError('Something went wrong!');
                })
            );
    }

    getClient(form: any) {
        const cedula = form.cedula;
        return this.http.get("http://localhost:3000/api/getClient/" + cedula).
            pipe(
                map((data: any) => {
                    if (data.code != 500) {
                        return data;
                    } else {
                        this.onDbError();
                    }
                }), catchError(error => {
                    this.onDbError();
                    return throwError('Something went wrong!');
                })
            );
    }

    getSucursal() {
        return this.sucursal_id;
    }

    login() {
        return this.http.get("http://localhost:3000/api/getSucursal").
            pipe(
                map((data: any) => {
                    if (data.code != 500) {
                        return data;
                    } else {
                        this.onDbError();
                    }
                }), catchError(error => {
                    this.onDbError();
                    return throwError('Something went wrong!');
                })
            );
    }


    getInventario(form: string) {
        const sucID = form;
        return this.http.get("http://localhost:3000/api/getInventario/" + sucID).
            pipe(
                map((data: any) => {
                    if (data.code != 500) {
                        return data;
                    } else {
                        this.onDbError();
                    }
                }), catchError(error => {
                    this.onDbError();
                    return throwError('Something went wrong!');
                })
            );
    }

    savePurchase(purchase: any) {
        return this.http.post("http://localhost:3000/api/savePurchase", purchase)
            .pipe(
                map((data: any) => {
                    if (data.code != 500) {
                        return data;
                    } else {
                        this.onDbError();
                    }
                }), catchError(error => {
                    this.onDbError();
                    return throwError('Something went wrong!');
                })
            );
    }

    onDbError() {
        localStorage.removeItem('isLoggedin');
        localStorage.removeItem('sucID');
        localStorage.removeItem('sucName');
        this.router.navigate["/"]
    }

    getClientPurchase(body: any) {
        return this.http.get("http://localhost:3000/api/getClientPurchase", body)
            .pipe(
                map((data: any) => {
                    if (data.code != 500) {
                        console.log(data);
                        return data;
                    } else {
                        this.onDbError();
                    }
                }), catchError(error => {
                    this.onDbError();
                    return throwError('Something went wrong!');
                })
            );
    }

    getPurchases(sucID: string) {
        return this.http.get("http://localhost:3000/api/getAllPurchases/" + sucID)
            .
            pipe(
                map((data: any) => {
                    if (data.code != 500) {
                        return data;
                    } else {
                        this.onDbError();
                    }
                }), catchError(error => {
                    this.onDbError();
                    return throwError('Something went wrong!');
                })
            );
    }
}
