import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserserviceService } from './userservice.service';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent implements OnInit {
  constructor(private service: UserserviceService, private route: ActivatedRoute, private router: Router) { }
  user: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log(id);
      let response = this.service.getuserbyid(id).subscribe((data: any) => this.user = data);
    });
  }

  updateuser() {
    console.log(this.user.id);

    this.service.updateUser(this.user).subscribe(() => {
      this.showAlert();
      this.router.navigate(['/userdash', this.user.id]);
    });
  }

  showAlert() {
    alert('User is updated!');
  }
}
