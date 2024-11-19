import { InfoData } from 'src/app/ui/info-card/info-card.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services-restorant',
  templateUrl: './services-restorant.component.html',
  styleUrls: ['./services-restorant.component.css']
})
export class ServicesRestorantComponent {
  // Dati da passare al componente figlio
  infoData: InfoData[] = [
    {
      icon: 'fa fa-user-tie',
      title: 'Master Chefs',
      description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
    },
    {
      icon: 'fa fa-utensils',
      title: 'Quality Food',
      description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
    },
    {
      icon: 'fa fa-cart-plus',
      title: 'Online Order',
      description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
    },
    {
      icon: 'fa fa-headset',
      title: '24/7 Service',
      description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
    },
  ];
}