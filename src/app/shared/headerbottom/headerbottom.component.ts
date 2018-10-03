import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-headerbottom',
  templateUrl: './headerbottom.component.html',
  styleUrls: ['./headerbottom.component.css']
})
export class HeaderbottomComponent implements OnInit {
	homeImg = "url(../../assets/images/home-bg.jpg)";
	about = "url(../../assets/images/about-bg.jpg)";
	post = "url(../../assets/images/post-bg.jpg)";
	contact = "url(../../assets/images/contact-bg.jpg)"; 
 


  ngOnInit() { 
  }

}
