import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPurchaseRouting } from './new-purchase.module';
import { NewPurchaseComponent } from './new.purchase.component';
import { PageHeaderModule } from '../../shared';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [CommonModule,
        NewPurchaseRouting,
        PageHeaderModule,
        TranslateModule,
        FormsModule,
        NgbDropdownModule, 
        NgbModule,
        ReactiveFormsModule,
        NgbModule.forRoot()],
    declarations: [NewPurchaseComponent]
})
export class NewPurchaseModule { }
