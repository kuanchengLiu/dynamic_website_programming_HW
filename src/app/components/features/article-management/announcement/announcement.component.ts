import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article/article.service';
import { ResponseArticle } from 'src/app/Account';
import $ from 'jquery';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
}) export class AnnouncementComponent implements OnInit {
  announcements: ResponseArticle[] = [];

  editing: Boolean = false;
  editingIndex: number = undefined;
  editingAnnouncement: ResponseArticle = {
    "uuid": "",
    "owner": "",
    "createDate": "",
    "lastEditDate": "",
    "lastEditAccount": "",
    "title": "",
    "coverImage": "",
    "content": ""
  }
  submitting: Boolean = false;

  constructor(private articleSerivce: ArticleService) { }

  ngOnInit(): void {
    // announcements = this.getAnnouncements();
    this.articleSerivce.getAllArticle().subscribe((response) => {
      this.announcements = response;
    })
  }

  edit(index): void {
    this.editing = true;
    if (this.editingIndex !== index) {
      this.editingIndex = index;
      this.editingAnnouncement = Object.create(this.announcements[index]);
    }
  }

  submitEdit(): void {
    this.submitting = true;
    this.articleSerivce.patchEvent(this.editingAnnouncement, this.editingAnnouncement.uuid)
      .subscribe(response => {
        this.editing = false;
        this.submitting = false;
        this.announcements[this.editingIndex] = this.editingAnnouncement;
        $("body").toast({
          class: "success",
          title: "送出成功",
          message: "公告已經成功更新！"
        });
        console.log("submit succeed!", response);
      }, error => {
        this.submitting = false;
        $("body").toast({
          class: "error",
          title: "送出失敗",
          message: "公告更新失敗"
        });
        console.error("error on submitting.", error);
      });
  }

  private getAnnouncements() { }

}