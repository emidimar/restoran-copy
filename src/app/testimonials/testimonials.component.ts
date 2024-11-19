import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials = [
    {
      quote: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
      name: 'John Doe',
      profession: 'Entrepreneur',
      image: 'assets/img/testimonial-1.jpg'
    },
    {
      quote: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
      name: 'Jane Smith',
      profession: 'Designer',
      image: 'assets/img/testimonial-2.jpg'
    },
    {
      quote: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
      name: 'Emily Davis',
      profession: 'Chef',
      image: 'assets/img/testimonial-3.jpg'
    },
    {
      quote: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
      name: 'Mike Johnson',
      profession: 'Photographer',
      image: 'assets/img/testimonial-4.jpg'
    }
  ];
}
