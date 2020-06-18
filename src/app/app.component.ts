import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from './account-service.service';
import { Account, Permission } from './Account';
import { ArticleService } from './service/article/article.service';
import { KanbanService } from './service/kanban/kanban.service';
import { timeout } from 'rxjs/operators';
import { GroupService } from './service/group/group.service';
import { PermissionService } from './service/permission/permission.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './vendor/bootstrap/css/bootstrap.min.css']
})
export class AppComponent {
  constructor(private accountService: AccountServiceService, private articleService: ArticleService, private kanbanService: KanbanService, private permissionChacker: PermissionService) { }

  accountCreator: Account[] = [
    {
      "username": "YukinaMochizuki",
      "passwordHash": "hash",
      "fullName": "yukina",
      "email": "1p41p4jejo@gmail.com",
      "phone": "886912345678",
      "address": "13F-2"
    }

  ];

  permission: Permission =
    {
      'account': 'YukinaMochizuki',
      'permission': '1'
    };

  ngOnInit() {
    this.accountService.getAllAccount()
      .subscribe((response) => {
        console.log(response);
      });
    // this.accountService.createAccount(this.accountCreator)
    //   .subscribe((respomse) => {
    //     console.log(respomse);
    //   });
    this.articleService.getAllArticle()
      .subscribe((response) => {
        console.log(response);
      });
    this.kanbanService.getAllKanban()
      .subscribe((response) => {
        console.log(response)
      });

    this.permissionChacker.checkPermission(this.permission)
      .subscribe((response) => {
        console.log(response);
      });

  }

  title = 'DynamicWebsiteFrontEnd';

}


