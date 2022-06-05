import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  public isMenuCollapsed = true;

  constructor() { }

  ngOnInit(): void {
    this.changeClass()
  }

  changeClass(){
    var nav = $(".navBar");
    $(window).scroll(function() {
      if ($(window).scrollTop())  {
        nav.addClass("sticky");
        nav.removeClass("absolute")
        nav.css("background-color", "white")
      } else {
        nav.removeClass("sticky");
        nav.addClass("absolute")
        nav.css("background-color", "transparent")
      }
    });  
  }

}
