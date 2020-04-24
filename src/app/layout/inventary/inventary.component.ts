import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { BackEndService } from '../../service';
import { FormGroup, FormControl, Validators, AbstractControl, NgForm } from '@angular/forms';


@Component({
    selector: 'app-inventary',
    templateUrl: './inventary.component.html',
    styleUrls: ['./inventary.component.scss'],
    animations: [routerTransition()]
})

export class InventaryComponent implements OnInit {

    private formDirective: NgForm;
    data: string[];
    alert: {};
    alertSuccess: boolean = false;

    constructor(private translate: TranslateService, private beservice: BackEndService) {
    }

    ngOnInit() {
        const sucID = localStorage.getItem('sucID');
        this.beservice.getInventario(sucID).subscribe((res) => {
            if (res.code == 200) {
                this.data = res.data;
            }
            if (res.code == 401) {
                this.alert = {
                    id: 1,
                    type: 'danger',
                    message: res.message,
                };
                this.alertSuccess = true;
            }
            this.data = res.data;
        });
    }

    close() {
        this.alertSuccess = false;
    }


}
