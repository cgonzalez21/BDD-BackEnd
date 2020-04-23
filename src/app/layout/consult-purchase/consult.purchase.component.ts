import { Component, OnInit, PipeTransform } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { BackEndService } from '../../service';
import { FormGroup, FormControl, Validators, AbstractControl, NgForm } from '@angular/forms';

interface Purchase {
    nombre: string;
    apellido: string;
    telefono: string;
    correo: string;
    cedula: string;
    desc_art: string;
    cantidad: number;
    subtotal: string;
    impuesto: string;
    total: string;
    fecha: Date;
  }


@Component({
    selector: 'app-consult-purchase',
    templateUrl: './consult.purchase.component.html',
    styleUrls: ['./consult.purchase.component.scss'],
    animations: [routerTransition()]
})

export class ConsultPurchaseComponent implements OnInit {

    profileForm: FormGroup;
    private formDirective: NgForm;
    data: string[];
    alert: {};
    alertSuccess: boolean = false;
    tableVisible: boolean = false;
    sucID: string;
    purchases: Purchase [];
    filter = new FormControl('');
    public searchString: string;

    constructor(private translate: TranslateService, private beservice: BackEndService) {
        this.translate.setDefaultLang('es');
        this.alert = {
            id: 1,
            type: '',
            message: '',
        };
    }

    ngOnInit() { this.sucID = localStorage.getItem('sucID'); this.getPurchases() }

    getPurchases() {
        this.beservice.getPurchases(this.sucID).subscribe((res) => {
            if (res.code == 200) {
                this.purchases = res.data;
                this.tableVisible = true;
                console.log(this.purchases);
            }
            if (res.code == 300) {
                this.alert = {
                    id: 1,
                    type: 'danger',
                    message: res.message,
                };
                this.tableVisible = false;
                this.alertSuccess = true;
            }
            if (res.code == 404) {
                this.alert = {
                    id: 1,
                    type: 'danger',
                    message: res.message,
                };
                this.tableVisible = false;
                this.alertSuccess = true;
            }
        });
    }

    onInputChange() {
        this.tableVisible = false;
    }

    close() {
        this.alertSuccess = false;
        this.resetForm(this.profileForm);
    }

    resetForm(formGroup: FormGroup) {
        let control: AbstractControl = null;
        formGroup.reset();
        this.formDirective.resetForm();
        formGroup.markAsUntouched();
        Object.keys(formGroup.controls).forEach((name) => {
            control = formGroup.controls[name];
            control.setErrors(null);
        });
        formGroup.setErrors({ 'invalid': true });
    }
}
