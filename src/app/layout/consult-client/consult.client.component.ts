import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { BackEndService } from '../../service';
import { FormGroup, FormControl, Validators, AbstractControl, NgForm } from '@angular/forms';


@Component({
    selector: 'app-consult-client',
    templateUrl: './consult.client.component.html',
    styleUrls: ['./consult.client.component.scss'],
    animations: [routerTransition()]
})

export class ConsultClientComponent implements OnInit {

    profileForm: FormGroup;
    private formDirective: NgForm;
    data: string[];
    alert: {};
    alertSuccess: boolean = false;
    tableVisible: boolean = false;

    constructor(private translate: TranslateService, private beservice: BackEndService) {
        this.profileForm = new FormGroup({
            cedula: new FormControl('', [Validators.required,
            Validators.maxLength(30), Validators.minLength(1)])
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
        this.beservice.getClient(this.profileForm.value).subscribe((res) => {
            if (res.code == 200) {
                this.data = res.data;
                this.tableVisible = true;
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
            if(res.code == 404){
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
