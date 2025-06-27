import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonList, IonItem, IonInput, IonIcon, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mail, key, person, book, people } from 'ionicons/icons';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonList, IonItem, IonInput, IonIcon, IonButton, ReactiveFormsModule]
})
export class RegisterPage implements OnInit {
  private registerService = inject(RegisterService);

  registerForm = new FormGroup({
    nom: new FormControl('', { nonNullable: true}),
    username: new FormControl('', { nonNullable: true}),
    email: new FormControl('', { nonNullable: true}),
    password: new FormControl('', { nonNullable: true})
  });


  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ mail, key, person, book, people });
  }
  ngOnInit() {}

   submit() {
    this.registerService.register(this.registerForm.getRawValue());
    //console.log(this.loginForm.value);
  }

}
