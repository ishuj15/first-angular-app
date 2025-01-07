import { Component, computed, EventEmitter, Input ,input, Output} from '@angular/core';
// import {DUMMY_USERS} from '../dummy-users';
import { User} from './user.model';
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //Using signal instead of decorator
   // avatar=input<string>();
    // avatar=input.required<string>();//when it is required se required
    // name=input.required<string>();

    // imagePath= computed(()=>  {
    //   return 'assests/users/'  + this.avatar;
    // });

    // onSelectUser(){
    //    //won't work ==  this.avatar.set();//Property 'set' does not exist on type 'InputSignal<string>'
    // }

    //Using @Input decorator for accepting component inputs
            // @Input({required: true}) id!:string;
            // @Input ({required: true}) avatar!: string  ;
            // @Input ({required: true}) name!: string  ;


//creating user object       
// @Input({required: true}) user!:{
//   id:string;
//   avatar: string ;
//   name: string ;
// }
    @Input({required: true}) user!:User;
    @Input({required: true}) selected!:boolean;
    @Output() select = new EventEmitter();
    get imagePath(){
      //  console.log(this.avatar)
      return 'assests/users/'  + this.user.avatar;
    }

    onSelectUser(){
      this.select.emit(this.user.id);
    }
      //Code for one single user in user component


  // selectedUser= DUMMY_USERS[randomIndex];

  // get imagePath(){
  //   return 'assests/users/'+ this.selectedUser.avatar
  // }
  // onSelectUser()
  // {
    // console.log('Clicked');
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    // this.selectedUser= DUMMY_USERS[randomIndex];
  // }
}
