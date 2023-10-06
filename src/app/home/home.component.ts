import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users: any;
  constructor(private userdata:UserDataService)
  {
    userdata.user().subscribe((data)=>{
      console.warn('data',data)
      this.users=data;
    });
  }

  getUserFormData(data:any)
  {
    // console.warn(data);
    this.userdata.saveUser(data).subscribe((result)=>{
      console.warn(result);
      
    })
  }

}
