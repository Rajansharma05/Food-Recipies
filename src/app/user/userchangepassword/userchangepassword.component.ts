import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/userupdate/userservice.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-userchangepassword',
  templateUrl: './userchangepassword.component.html',
  styleUrls: ['./userchangepassword.component.css']
})
export class UserchangepasswordComponent implements OnInit {

  password:any
  confirmpassword:any
  errmsg:string=""
  constructor(private service:UserserviceService,private route:ActivatedRoute,private router:Router){}
  user:any
  

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      const id=params.get('id');
    console.log(id)
    let response=this.service.getuserbyid(id).subscribe((data:any)=>this.user=data)
  })
  
}


passwordchange(id:number){
  console.log(this.password)
  console.log(id)
  if(this.password === this.confirmpassword){
    console.log("its working")
    this.service.changepass(id,this.password).subscribe();
    this.router.navigate(['/userdash',id]);
  }
  else{
    this.errmsg="Password Doesn't matched"
  }

}

}