import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Gotoprivacy() {
    this.router.navigate(['/privacypolicy']);
  }
  Gototermcondition() {
    this.router.navigate(['/termcondition']);
  }
  Gotocontactus() {
    this.router.navigate(['/contactus']);
  }
}
