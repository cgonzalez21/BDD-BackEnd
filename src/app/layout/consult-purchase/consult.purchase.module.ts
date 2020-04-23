import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultPurchaseRouting } from './consult.purchase-routing.module';
import { ConsultPurchaseComponent } from './consult.purchase.component';
import { PageHeaderModule } from '../../shared';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './filter.pipe';

@NgModule({
    imports: [CommonModule,
        ConsultPurchaseRouting,
        PageHeaderModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot()],
    declarations: [ConsultPurchaseComponent,
    FilterPipe]
})
export class ConsultPurchaseModule { }
