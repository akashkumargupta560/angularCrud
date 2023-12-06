import { Component } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { userModel } from "../../shared/modalType";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.scss",
})
export class DashboardComponent {
  userForm!: FormGroup;
  formObjectModel: userModel = new userModel();
  constructor(
    private fb: FormBuilder,
    private userSvc: UserService
  ) {}
  ngOnInit(): void {
    this.bulderForm();
  }
  bulderForm() {
    this.userForm = this.fb.group({
      fullname: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required]),
    });
  }
  get input(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }
  submitForm() {
    alert("ksdnkdfg");
    console.log("asfsjdfj>>");
  }
}
