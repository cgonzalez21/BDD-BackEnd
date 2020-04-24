import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultClientComponent } from './consult.client.component';

const routes: Routes = [
    {
        path: '', component: ConsultClientComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConsultClientRouting {
}
