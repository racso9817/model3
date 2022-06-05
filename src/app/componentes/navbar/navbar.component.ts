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
    var logo = $(".logo");
    var windowWidth = $(window).width();
    $(window).scroll(function() {
      if ($(window).scrollTop())  {
        nav.addClass("fixed-top");
        nav.css("background-color", "white")
        logo.css("width","3vw");
        if(windowWidth? windowWidth < 560: true){
          logo.css("width","10vw");
        }
      } else {
        nav.removeClass("fixed-top");
        nav.css("background-color", "transparent")
        logo.css("width","5vw");
        if(windowWidth? windowWidth < 560: true){
          logo.css("width","20vw");
        }
      }
    });  
  }

}
