import { Component, OnInit } from '@angular/core';
import { IonIcon, IonTabBar, IonTabButton, IonTabs, IonBadge } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { aperture, document, personCircle, personAdd } from 'ionicons/icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  imports: [IonIcon, IonTabBar, IonTabButton, IonTabs, IonBadge],
})
export class NavBarComponent  implements OnInit {

  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ aperture, document, personCircle, personAdd });
  }
  ngOnInit() {}

}
