import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  constructor() { }

  getData = async () => {
    try {
      let response = await fetch("http://18.194.21.216/api/menu?category=Pizza");
      let data = await response.json();
      console.log(data);
    } catch (error: any) {
      console.log("Errore: ", error.message);
    }
  }
}
