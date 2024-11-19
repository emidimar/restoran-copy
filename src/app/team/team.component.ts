import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  teamMembers = [
    { name: 'John Doe', designation: 'Head Chef', image: 'assets/team-1.jpg', facebook: '#', twitter: '#', instagram: '#' },
    { name: 'Jane Smith', designation: 'Sous Chef', image: 'assets/team-2.jpg', facebook: '#', twitter: '#', instagram: '#' },
    { name: 'Mike Johnson', designation: 'Pastry Chef', image: 'assets/team-3.jpg', facebook: '#', twitter: '#', instagram: '#' },
    { name: 'Emily Davis', designation: 'Line Cook', image: 'assets/team-4.jpg', facebook: '#', twitter: '#', instagram: '#' }
  ];
}
