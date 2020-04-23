import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators, NgForm, AbstractControl } from '@angular/forms';
import { BackEndService } from '../../service';


@Component({
    selector: 'app-new-purchase',
    templateUrl: './new.purchase.component.html',
    styleUrls: ['./new.purchase.component.scss'],
    animations: [routerTransition()]
})

export class NewPurchaseComponent implements OnInit {
    profileForm: FormGroup;
    alert: {};
    alertSuccess: boolean = false;
    private formDirective: NgForm;
    data: string[];
    sucID: string;
    selectItem: string = 'Seleccione articulo';


    constructor(private translate: TranslateService, private beservice: BackEndService) {
        this.translate.setDefaultLang('es');
        this.profileForm = new FormGroup({
            cedula: new FormControl('', [Validators.required,
            Validators.maxLength(30), Validators.minLength(1)]),
            cantidad: new FormControl('', [Validators.required,
            Validators.minLength(1), Validators.maxLength(2)]),
            item: new FormControl('', [Validators.required])
        });
        this.alert = {
            id: 1,
            type: '',
            message: '',
        };
    }

    ngOnInit() {
        this.sucID = localStorage.getItem('sucID');
        this.beservice.getInventario(this.sucID).subscribe((res) => {
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

        });
    }

    onSubmit() {
        const form = this.profileForm.value;
        const body = {
            cedula: form.cedula,
            id_art: form.item.ArticuloID_in,
            cantidad: form.cantidad,
            id_suc: this.sucID
        };
        if (form.item.Disponible_in > 0) {
            this.beservice.savePurchase(body).subscribe((res) => {
                if (res.code == 200) {
                    this.alert = {
                        id: 1,
                        type: 'success',
                        message: res.message,
                    };
                    this.alertSuccess = true;
                }
                if (res.code == 404) {
                    this.alert = {
                        id: 1,
                        type: 'danger',
                        message: res.message,
                    };
                    this.alertSuccess = true;
                }
            })
        } else {
            this.alert = {
                id: 1,
                type: 'warning',
                message: 'No contamos en el inventario con la cantidad solicitada por el cliente',
            };
            this.alertSuccess = true;
        }
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

    close() {
        this.alertSuccess = false;
        this.resetForm(this.profileForm);
    }

}
