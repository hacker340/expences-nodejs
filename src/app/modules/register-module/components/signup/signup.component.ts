import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/services/main-service.service';
import { Urls } from 'src/app/utils/url-strings';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user: any = {};

  constructor(
    private srv: MainServiceService
  ) { }

  ngOnInit() {
  }


  public signup() {
    this.srv.create(Urls.USER_URL, this.user)
      .then((res: any) => {
        console.log(res);
      }).catch(err => {
        console.error(err);
      });
  }

}
