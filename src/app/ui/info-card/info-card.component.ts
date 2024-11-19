import { Component, Input } from '@angular/core';

export interface InfoData {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent {
  @Input() data!: InfoData;
}
