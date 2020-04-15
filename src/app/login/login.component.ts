import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
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
    public countries: { [key: string]: Object; }[] = [
        { Name: 'Australia', Code: 'AU' },
        { Name: 'Bermuda', Code: 'BM' },
        { Name: 'Canada', Code: 'CA' },
        { Name: 'Cameroon', Code: 'CM' },
        { Name: 'Denmark', Code: 'DK' },
        { Name: 'France', Code: 'FR' },
        { Name: 'Finland', Code: 'FI' },
        { Name: 'Germany', Code: 'DE' },
    ];
    // maps the local data column to fields property
    public localFields: Object = { text: 'Name', value: 'Code' };
    // set the placeholder to MultiSelect Dropdown input element
    public localWaterMark: string = 'Select countries';


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
        }
    }

    changeSortOrder(item: any) {
        this.sucID = item.ID_su
        this.selectItem = item.Nombre_su
    }
}
