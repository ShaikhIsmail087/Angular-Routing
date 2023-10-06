import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  userId:any;
  constructor(private route:ActivatedRoute){}

  ngOnInit():void{
    console.warn("User id is",this.route.snapshot.paramMap.get('id'));
    this.userId=this.route.snapshot.paramMap.get('id');
  }

}
