import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultClientRouting } from './consult.client-routing.module';
import { ConsultClientComponent } from './consult.client.component';
import { PageHeaderModule } from '../../shared';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [CommonModule,
        ConsultClientRouting,
        PageHeaderModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot()],
    declarations: [ConsultClientComponent]
})
export class ConsultClientModule { }
