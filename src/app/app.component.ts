import { Component } from '@angular/core';
import { User, UserData } from './user-data';
import * as _ from 'lodash';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public readonly _users: User[] = UserData;
  public users: User[] = UserData;

  constructor() {}

  get userKeys(): any {
    return Object.keys(this._users[0]).map((user) => user);
  }

  // Sort Users
  sortUsersByValue(value: string): void {
    // TODO - sort grid ascending by value
    this.users=this._users.sort((a,b) => a[value]<b[value]?-1:1);
  }

  // Filter users
  filterUsersByValue(value: string): any {
    // TODO - filter user grid by value
    this.users=this._users.filter(user => user.name.toLowerCase().includes(value.toLowerCase()));
    this.users=this._users.filter((user) =>
      {
        let filteredData:User[]=[];
        let propVal:string ="";
        for(let key in user)
        {
          propVal=user[key].toString();
          if(propVal.toLowerCase().indexOf(value.toLowerCase())>-1)
          {
            filteredData.push(user);
            return filteredData;
          }
        }        
      }
    );
  }
}
