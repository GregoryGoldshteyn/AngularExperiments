import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EditHexService } from '../edit-hex.service';
import { Subscription } from 'rxjs/Subscription';
import { DrawableHex, NumberToTerrain, NumberToColor, TerrainToNumber } from '../hex';

@Component({
  selector: 'app-right-sidenav',
  templateUrl: './right-sidenav.component.html',
  styleUrls: ['./right-sidenav.component.css']
})
export class RightSidenavComponent implements OnInit {

	subscription: Subscription;
	editHex: DrawableHex;
	NumberToTerrain = NumberToTerrain;
	
  constructor(private editHexService: EditHexService) { 
	this.editHexService = editHexService;
	this.subscription = this.editHexService.getEditedHex().subscribe(editHex =>{
		this.editHex = editHex;
		console.log(editHex.type);
	});
  }
  
  saveHex(){
	this.editHex.recolor();
	this.editHexService.selectHexToEdit(this.editHex);
  }

  ngOnInit() {
	  
  }
  
  ngAfterContentInit(){
	  
  }

}
