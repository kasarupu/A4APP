import { Component, OnInit } from '@angular/core';

import { DataService} from '../../Services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:String;
  age:number;
  email:String;
  address:Address;
  posts:Post[];
  isEdit:boolean=false;

 /* address:{
    street:String,
    city:string,
    state:string
  }*/
  hobbies:string[];
  constructor(private dataService:DataService) {
    console.log('constructor ran...');
   }

  ngOnInit() {
    console.log('ngOnInit ran...');
    this.name = 'Krishna';
    this.age=30;
    this.email="test@test.com"
    this.address={
      street:'3rd Main',
      city:'Bangalore',
      state:'KN'
    }
    this.hobbies=['watch movies','Play games','Paintimg'];
    this.dataService.getPosts().subscribe((posts) => {
     // console.log(posts)
      this.posts = posts;
    });
  }

  onClick(){
    this.name='Kasarupu';
    this.hobbies.push('new Entry');
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    console.log(hobby);
    for(let i=0;i <this.hobbies.length;i++){
     if(this.hobbies[i] == hobby){
      this.hobbies.splice(i,1);
     }
    }    
  }
}
interface Address{
  street:String,
  city:string,
  state:string
}

interface Post{
  title:string;
  id:number;
  body:string;
  userId:number;
}