import { Component } from '@angular/core';
import {UserDataService} from './services/user-data.service';

interface dataType
{
  name:string;
  id:number;
  indian:boolean;
  address:any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'routing-blog';
  users:any;
  memberData=[
    {name:'anil',email:'anil@test.com'},
    {name:'Sam',email:'sam@test.com'},
    {name:'anil',email:'bhasker@test.com'},
    {name:'peter',email:'peter@test.com'},
  ]
  // constructor(private userdata:UserDataService)
  // {
  //   console.warn('userdata',userdata.users());
  //   this.users=userdata.users();
  // }

  constructor(private userdata:UserDataService)
  {
    userdata.user().subscribe((data)=>{
      console.warn('data',data)
      this.users=data;
    });
  }

  getData()
  {
    const data:dataType=
    {
      name:"salim",
      id:342,
      indian:true,
      address:"23, Noida ump"
    }
    return data;
  }

  

}
