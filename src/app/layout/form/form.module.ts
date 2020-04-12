import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from '../bs-component/components';

@NgModule({
    imports: [CommonModule, FormRoutingModule, PageHeaderModule, TranslateModule, FormsModule,
        ReactiveFormsModule],
    declarations: [FormComponent, ModalComponent]
})
export class FormModule { }
