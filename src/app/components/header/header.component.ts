import {
  Component,
  OnInit
}

  from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
}

) export class HeaderComponent implements OnInit {
  active: string = "";

  ngAfterViewInit() {
    $('.menu.browse').dropdown();

    $(window).on('load', function () {
      if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function () {
          $(this).remove();
        });
      }
    });


    $(".navbar-toggler").on("click", () => {
      $("#navbarNavDropdown").toggleClass("show");
      $("#nav-blank").toggleClass("show")
    }

    );

    $(".nav-link").on("click", () => {
      $("#navbarNavDropdown").removeClass("show");
      $("#nav-blank").removeClass("show")
    }

    );
  }

  constructor() { }

  ngOnInit(): void { }

}