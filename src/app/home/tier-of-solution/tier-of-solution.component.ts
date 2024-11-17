import { Component } from '@angular/core';

@Component({
  selector: 'app-tier-of-solution',
  templateUrl: './tier-of-solution.component.html',
  styleUrls: ['./tier-of-solution.component.css'],
})
export class TierOfSolutionComponent {
  data: any = [
    {
      plan: 'Subscription',
      price: '₹25,700',
      tickImg: '../../../assets/tick.svg',
      details: [
        'Build On Angular',
        '18k Deployment cost',
        '1 Month Free Support',
        '1 Month Free Digital Markerting',
      ],
      btn: 'Get Started',
    },
    {
      plan: 'Regular',
      price: '₹1,19,680',
      tickImg: '../../../assets/tick.svg',
      details: [
        'Build On Angular',
        '18k Deployment cost',
        '1 Month Free Support',
        '1 Month Free Digital Markerting',
      ],
      btn: 'Get Started',
    },
    {
      plan: 'Exclusive',
      price: '₹3,32,767',
      tickImg: '../../../assets/tick.svg',
      details: [
        'Build On Angular',
        '18k Deployment cost',
        '1 Month Free Support',
        '1 Month Free Digital Markerting',
      ],
      btn: 'Get Started',
    },
    {
      plan: 'Customer Query',
      customBooking: 'Book an exclusive meeting',
      tickImg: '../../../assets/tick.svg',
      details: [
        'Build On Angular',
        '18k Deployment cost',
        '1 Month Free Support',
        '1 Month Free Digital Markerting',
      ],
      btn: 'Book',
    },
  ];
}
