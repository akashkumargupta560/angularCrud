import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { ReactiveFormsModule } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: "",
        component: DashboardComponent,
      },
    ]),
  ],
  providers: [UserService],
})
export class DashboardModule {}
