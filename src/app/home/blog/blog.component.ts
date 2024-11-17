import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  data: any = [
    {
      img: '../../../assets/blog.svg',
      infoTxt: 'Why Should You Consider Angular Development For Your Project?',
      time: 1,
      technology: 'Angular',
    },
    {
      img: '../../../assets/blog.svg',
      infoTxt: 'Why Should You Consider Angular Development For Your Project?',
      time: 1,
      technology: 'Angular',
    },
    {
      img: '../../../assets/blog.svg',
      infoTxt: 'Why Should You Consider Angular Development For Your Project?',
      time: 1,
      technology: 'Angular',
    },
  ];
}
