import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultPurchaseComponent } from './consult.purchase.component';

const routes: Routes = [
    {
        path: '', component: ConsultPurchaseComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConsultPurchaseRouting {
}
