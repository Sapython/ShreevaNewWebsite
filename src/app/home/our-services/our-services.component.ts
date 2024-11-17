import { Component } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css'],
})
export class OurServicesComponent {
  data = [
    {
      title: 'Custom Application',
      para: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
      img: '../../../assets/image/Group 9849.svg',
    },
    {
      title: 'Custom E-Commerce',
      para: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
      img: '../../../assets/image/CEC-img.svg',
    },
    {
      title: 'Business Management Platforms',
      para: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
      img: '../../../assets/image/BMG-img.svg',
    },
    {
      title: 'Custom Website',
      para: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
      img: '../../../assets/image/CW-img.svg',
    },
  ];
}
