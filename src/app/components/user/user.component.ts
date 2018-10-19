import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {UserService} from '../../service/user.service';
import {User} from '../../interfaces/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
errorMessage = '';
 user: User | undefined;
  constructor(private userservice: UserService , private router: Router,private route: ActivatedRoute ) { }

  ngOnInit() {
  const param = this.route.snapshot.paramMap.get('id');
    if (param) {
    const id = +param;
      this.getUser(id);
    }
  }
  getUser(id: number) {
    this.userservice.get(id).subscribe(
      user => this.user = user,
      error => this.errorMessage = <any>error);
  }
onBack(): void {
    this.router.navigate(['/home']);
  }

}
