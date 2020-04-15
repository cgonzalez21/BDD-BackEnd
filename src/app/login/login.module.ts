import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [CommonModule, LoginRoutingModule, FormsModule, NgbDropdownModule, NgbModule, MultiSelectAllModule],
    declarations: [LoginComponent]
})
export class LoginModule {}
