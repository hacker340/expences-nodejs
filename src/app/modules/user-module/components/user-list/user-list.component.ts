import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MainServiceService } from 'src/app/services/main-service.service';
import { Urls } from 'src/app/utils/url-strings';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent implements OnInit {
  public users: any[] = [];

  constructor(private mainSrv: MainServiceService) { }

  ngOnInit() {
    this.loadAllUsers();
  }

  private async loadAllUsers() {
    try {
      this.users = await this.mainSrv.getAll(Urls.USER_URL).then((res: any) => res.data);
    } catch (err) {
      console.error(err);
    }
  }

}
