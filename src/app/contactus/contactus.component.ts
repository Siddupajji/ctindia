
import {AfterViewInit, Component, OnInit, ViewChild,Output, Input } from '@angular/core';

import { FormGroup, NgForm, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmailService } from '../email.service';
import * as Aos from 'aos';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';






@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']

})

export class ContactusComponent implements OnInit{


  faDumbbell = faDumbbell
  formuser!: FormGroup;

  constructor( private http : EmailService){}


  ngOnInit(){
    this.formuser = new FormGroup({
      fname: new FormControl('', Validators.required),
      fnumber:new FormControl('', Validators.required),
      email:new FormControl('', Validators.required),
      message:new FormControl()

    })
  }

get fname(){
  return this.formuser.get('fname')
}
get fnumber(){
  return this.formuser.get('fnumber')
}
get email(){
  return this.formuser.get('email')
}

  onSubmit(){
    let userdata = this.formuser.value
    this.http.sendEmail('http://localhost:8080/sendmail', userdata).subscribe(data =>{
      let res:any = data
      console.log(`${userdata.fname}, ${userdata.email}`)
      this.formuser.reset()

    })
    console.log(this.formuser.value)
    this.formuser.reset()
  }
 


}






