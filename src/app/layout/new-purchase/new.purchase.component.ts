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
    selectItem: string = 'Seleccione articulo';


    constructor(private translate: TranslateService, private beservice: BackEndService) {
        this.translate.setDefaultLang('es');
        this.profileForm = new FormGroup({
            cedula: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(1)])
        });
        this.alert = {
            id: 1,
            type: '',
            message: '',
        };
    }

    ngOnInit() {
        const sucID = localStorage.getItem('sucID');
        this.beservice.getInventario(sucID).subscribe((res) => {
            this.data = res;
            console.log(this.data);
        });
    }

    onSubmit() {
        // this.beservice.createClient(this.profileForm.value).subscribe((res) => {
        //     var type: string;
        //     var message: string;

        //     if (res === "Client created succesfuly!!") {
        //         type = 'success'
        //         message = res;
        //     }
        //     else {
        //         type = 'danger'
        //         message = 'Something went wrong!'
        //     }

        //     this.alert = {
        //         id: 1,
        //         type: type,
        //         message: res,
        //     };
        //     this.alertSuccess = true;
        // });
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

    changeSortOrder(item: any) {
        this.selectItem = item.Nombre_su
    }

}
