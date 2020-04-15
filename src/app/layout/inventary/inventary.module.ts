import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventaryRouting } from './inventary-routing.module';
import { InventaryComponent } from './inventary.component';
import { PageHeaderModule } from '../../shared';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [CommonModule,
        InventaryRouting,
        PageHeaderModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot()],
    declarations: [InventaryComponent]
})
export class InventaryModule { }
