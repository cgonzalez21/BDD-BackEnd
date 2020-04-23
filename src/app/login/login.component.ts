import { Component, OnInit } from "@angular/core";
import { BackEndService } from "../service";
import { Router } from "@angular/router";


@Component({
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
    data: string[];
    selectItem: string = 'Seleccione la sucursal a conectar';
    sucID: string = '';
    alert: {};
    alertSuccess: boolean = false;

    constructor(private beservice: BackEndService, private router: Router) {
        this.alert = {
            id: 1,
            type: '',
            message: '',
        };
     }

    ngOnInit() {
        this.beservice.login().subscribe((res) => {
            if(res.code == 401){
                this.alert = {
                    id: 1,
                    type: 'danger',
                    message: res.message,
                };
                this.alertSuccess = true;
                this.router.navigate["/"];
            }
            if(res.code == 200) {
                this.data = res.data;
            }
            if(res.code == 300){
                this.alert = {
                    id: 1,
                    type: 'warning',
                    message: res.message,
                };
                this.alertSuccess = true;
                this.router.navigate["/"];
            }
            
        });
    }

    onLoggedin() {
        if (this.sucID != '') {
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('sucID', this.sucID);
            localStorage.setItem('sucName', this.selectItem);
        }
    }

    changeSortOrder(item: any) {
        this.sucID = item.ID_su
        this.selectItem = item.Nombre_su
    }

    close() {
        this.alertSuccess = false;
    }
}
