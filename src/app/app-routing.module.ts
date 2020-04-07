import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";

const routes: Routes = [
  {path: "", loadChildren: './layout/layout.module#LayoutModule'},
  // { path: "", component: LoginComponent },
  // { path: "signup", component: SignupComponent },
  // { path: "layout", loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
