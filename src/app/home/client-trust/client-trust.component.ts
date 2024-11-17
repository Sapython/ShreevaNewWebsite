import { Component } from '@angular/core';

@Component({
  selector: 'app-client-trust',
  templateUrl: './client-trust.component.html',
  styleUrls: ['./client-trust.component.css'],
})
export class ClientTrustComponent {
  data: any = [
    { img: '../../../assets/sigmaC.svg' },
    { img: '../../../assets/ssspC.svg' },
    { img: '../../../assets/virajC.svg' },
    { img: '../../../assets/sprlC.svg' },
    { img: '../../../assets/mahavadanyaC.svg' },
    { img: '../../../assets/isckonT.svg' },
    { img: '../../../assets/sngC.svg' },
  ];
}
