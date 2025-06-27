import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonMenu, IonButtons, IonMenuButton, IonInput, IonButton, IonSearchbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { ellipsisVertical, people, send, create } from 'ionicons/icons';

@Component({
  selector: 'app-ai-system',
  templateUrl: './ai-system.page.html',
  styleUrls: ['./ai-system.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonMenu, IonButtons, IonMenuButton, IonInput, IonButton, IonSearchbar]
})
export class AiSystemPage implements OnInit {

  constructor() {
     addIcons({ people, send, ellipsisVertical, create });
   }

  ngOnInit() {
  }

}
