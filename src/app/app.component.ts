import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DrawableHex } from './hex';
import { EditHexService } from './edit-hex.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  appRoutes = [
	{ path: 'home',		label: 'Home' },
	{ path: 'resume',	label: 'Resume' },
	{ path: 'hexmapper',	label: 'Hex Mapper' },
	{ path: 'about',	label: 'About' }
	];
}
