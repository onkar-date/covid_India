import { SocialMedia } from './../../../shared/constants/social.constant';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  socialMedia: Array<any> = SocialMedia;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  showSources(): void {
    this.router.navigate(['./sources']);
  }

  showContactPage(): void {
    this.router.navigate(['./contactUs']);
  }
}
