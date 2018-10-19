import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../interfaces/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
pageTitle = 'user List';
 users: User[] = [];
 errorMessage = '';

_listFilter = '';


  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredusers = this.listFilter ? this.performFilter(this.listFilter) : this.users;
  }

  filteredusers: User[] = [];
  

  constructor(private userservice: UserService) { }


performFilter(filterBy: string): User[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.users.filter((user: User) => user.nom.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }


  ngOnInit() {
  this.userservice.getAll().subscribe(
      res => {
        this.users = res;
         this.filteredusers = this.users;
      },
      error => this.errorMessage = <any>error
    );
      
  }

}
