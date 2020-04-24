import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators, NgForm, AbstractControl } from '@angular/forms';
import { BackEndService } from '../../service';


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})

export class FormComponent implements OnInit {
    profileForm: FormGroup;
    alert: {};
    alertSuccess: boolean = false;
    private formDirective: NgForm;


    constructor(private translate: TranslateService, private beservice: BackEndService) {
        this.profileForm = new FormGroup({
            nombre: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(1)]),
            apellido: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(1)]),
            telefono: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(1)]),
            correo: new FormControl('', [Validators.required, Validators.minLength(1)]),
            cedula: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(1)])
        });
        this.translate.setDefaultLang('es');

        this.alert = {
            id: 1,
            type: '',
            message: '',
        };
    }

    ngOnInit() { }

    onSubmit() {
        this.beservice.createClient(this.profileForm.value).subscribe((res) => {

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
        });
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
