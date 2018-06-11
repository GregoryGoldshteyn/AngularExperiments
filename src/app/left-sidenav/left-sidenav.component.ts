import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.css']
})
export class LeftSidenavComponent implements OnInit {

	leftThings = [{label: 'Bernie Sanders'},{label: 'Al Sharpton'}]

  constructor() { }

  ngOnInit() {
  }

}
