import { Component, OnInit } from "@angular/core";
import { BackEndService } from "../service";
import { Router } from "@angular/router";


@Component({
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
    isLoading = false;
    data: string[];
    selectItem: string = 'Seleccione la sucursal a conectar';
    sucID: string = '';

    constructor(private beservice: BackEndService, private router: Router) { }

    ngOnInit() {
        this.beservice.login().subscribe((res) => {
            this.data = res;
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
}
