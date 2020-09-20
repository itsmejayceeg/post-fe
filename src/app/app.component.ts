import { Component } from '@angular/core';
import { RegisterService } from '../app/services/register/register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quess-tech-exam';
  name: string;
  email: string;
  mobile: string;
  positionApplied: string;
  source: string;

  constructor(
    private registerService: RegisterService
  ) { }

  submitRegistration(): void {
    this.registerService
    .registerApplicant(
      {
        name: this.name,
        email: this.email,
        mobile: this.mobile,
        positionApplied: this.positionApplied,
        source: this.source
      }
    )
    .subscribe((result) => {
      if (result) {
        console.log('Registration successful!');
      }
    }, error =>  {
      console.warn(error);
    })
  }
}
