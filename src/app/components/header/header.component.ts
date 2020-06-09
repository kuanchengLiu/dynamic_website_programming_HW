import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  active:string = "";
  ngAfterViewInit() {
    $('.menu.browse').dropdown();

    $(window).on('load', function () {
      if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function () {
          $(this).remove();
        });
      }
    });

    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
