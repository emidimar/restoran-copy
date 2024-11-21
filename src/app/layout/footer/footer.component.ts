import { Component } from '@angular/core';

export interface SocialLinks {
  twitter: string;
  facebook: string;
  youtube: string;
  linkedin: string;
}

export interface Contact {
  address: string;
  phone: string;
  email: string;
  social: SocialLinks;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  constructor() { }

  contact: Contact = {
    address: "123 Street, New York, USA",
    phone: "+012 345 67890",
    email: "info@example.com",
    social: {
      twitter: "",
      facebook: "",
      youtube: "",
      linkedin: "",
    }
  }
}
