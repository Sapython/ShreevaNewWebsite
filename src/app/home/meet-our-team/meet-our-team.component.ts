import { Component } from '@angular/core';

@Component({
  selector: 'app-meet-our-team',
  templateUrl: './meet-our-team.component.html',
  styleUrls: ['./meet-our-team.component.css'],
})
export class MeetOurTeamComponent {
  dataArr1: any = [
    {
      team_name: 'design house',
      members: 5,
      skills: ['prototyping', 'graphic', 'ui/ux', 'graphic', 'design'],
    },
    {
      team_name: 'marketing team',
      members: 5,
      skills: ['prototyping', 'graphic', 'ui/ux', 'graphic', 'design'],
    },
  ];
  dataArr2: any = [
    {
      team_name: 'developer team',
      members: 5,
      skills: ['prototyping', 'graphic', 'ui/ux', 'graphic', 'design'],
    },
    {
      team_name: 'hr',
      members: 5,
      skills: ['prototyping', 'graphic', 'ui/ux', 'graphic', 'design'],
    },
  ];
}
