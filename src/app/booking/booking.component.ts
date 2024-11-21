import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted');
      alert('Message Sent!');
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
