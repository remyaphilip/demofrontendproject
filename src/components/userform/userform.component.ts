import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  users() {
    this.router.navigate(['/layout', { outlets: { 'content': ['users'] } }]);

  }

}
