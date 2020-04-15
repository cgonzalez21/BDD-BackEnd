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
    data: string [];

    constructor(private translate: TranslateService, private beservice: BackEndService) {
        this.profileForm = new FormGroup({
            cedula: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(1)])
        });
        this.translate.setDefaultLang('es');
    }

    ngOnInit() { }

    onSubmit() {
        this.beservice.getClient(this.profileForm.value).subscribe((res) => {
            this.data = res;
        });
    }

}
