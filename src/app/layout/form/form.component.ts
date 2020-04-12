import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BackEndService } from '../../service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    profileForm: FormGroup;
    closeResult: string;
    

    constructor(private translate: TranslateService, private beservice: BackEndService) {
        this.profileForm = new FormGroup({
            nombre: new FormControl('',[Validators.required, Validators.maxLength(30)]),
            apellido: new FormControl('',[Validators.required, Validators.maxLength(30)]),
            telefono: new FormControl('',[Validators.required, Validators.maxLength(30)]),
            correo: new FormControl('',[Validators.required]),
            cedula: new FormControl('',[Validators.required, Validators.maxLength(30)])
        });
        this.translate.setDefaultLang('es');
    }

    ngOnInit() { }

    onSubmit() {
        this.beservice.createClient(this.profileForm.value).subscribe((res)=>{
            console.log(res);
            this.profileForm.reset();
        });
    }
}
