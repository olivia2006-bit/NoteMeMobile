import { Component, inject, OnInit } from '@angular/core';
import { CommonModule,  } from '@angular/common';
import { FormsModule, FormGroup,  ReactiveFormsModule, FormControl  } from '@angular/forms';
import { IonContent, IonInput, IonList, IonItem, IonIcon, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personAdd, key, people } from 'ionicons/icons';
import { AuthService } from 'src/app/services/auth.service';
import {RouterLink} from "@angular/router";
import {
  NotConnectedFormContainerComponent
} from "../../components/not-connected-form-container/not-connected-form-container.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonInput, IonList, IonItem, IonIcon, IonButton, ReactiveFormsModule, RouterLink, NotConnectedFormContainerComponent]
})
export class LoginPage implements OnInit {

  private authservice = inject(AuthService);

  loginForm = new FormGroup({
    username: new FormControl('', { nonNullable: true}),
    password: new FormControl('', { nonNullable: true}),
  });


   constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ key, personAdd, people });
  }

  submit() {
    this.authservice.login(this.loginForm.getRawValue());
    console.log(this.loginForm.value);
  }

  ngOnInit() {}

}
