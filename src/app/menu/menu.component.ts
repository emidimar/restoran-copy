import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from '../service/menu-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  data!: [
    id: Number,
    category: String,
    name: String,
    price: Number,
    topping: Array<String>,
    rank: Number
  ];

  activeTab: string = 'tab-1';

  constructor(private menuService: MenuServiceService) { }

  ngOnInit(): void {
    this.fetchMenuData();
  }

  selectTab(tabId: string) {
    this.activeTab = tabId;
  }

  fetchMenuData() {
    this.menuService.getMenu('restaurants/2/menu?category=Pizza&orderBy=rank').subscribe({
      next: (response) => {
        this.data = response;
      },
      error: (err) => {
        console.error('Errore durante la chiamata API:', err);
      }
    })
  }
}
