import { SocialMedia } from './../../../shared/constants/social.constant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  socialMedia: Array<any> = SocialMedia;
  constructor() { }

  ngOnInit(): void {
  }

}
