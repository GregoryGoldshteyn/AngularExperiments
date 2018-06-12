import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import * as SVG from 'svg.js';
import { EditHexService } from '../edit-hex.service';
import { AtlasHex, RegionHex, LocalHex, HexVals, DrawableHex, NumberToColor, TerrainToNumber } from '../hex';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-hex-mapper',
  templateUrl: './hex-mapper.component.html',
  styleUrls: ['./hex-mapper.component.css']
})
export class HexMapperComponent implements OnInit {

	atlas: AtlasHex[][]
	col: AtlasHex[]
	editHex: DrawableHex;
	subscription: Subscription;
	draw;

  constructor(private editHexService: EditHexService){
	  this.editHexService = editHexService;
	  this.atlas = []
	  for(var i = 0; i < 31; i += 1){
		  this.atlas.push([]);
		  for(var j = 0; j < 26; j += 1){
			  this.atlas[i].push(new AtlasHex(
				i * (HexVals.HEX_DEPTH + HexVals.HEX_WIDTH),
				j * HexVals.HEX_HEIGHT * 2 + (i % 2 == 0 ? HexVals.HEX_HEIGHT : 0),
				i,
				j,
				'PLAINS')
			);
		  }
	  }
	  this.subscription = this.editHexService.getEditedHex().subscribe(editHex =>{
		this.editHex = editHex;
	});
  }

  printCoords(drawable, parent){
	parent.editHexService.selectHexToEdit(drawable);
	}
  
  ngOnInit() {
	this.draw = SVG('hexMapDrawing').size('100%', '100%');
		for(var i = 0; i < 31; i += 1){
			for(var j = 0; j < 26; j += 1){
				this.atlas[i][j].drawHex(this.draw);
				this.atlas[i][j].setOnClickListener(this.printCoords, this);
				this.atlas[i][j].generateSubHexes();
				this.atlas[i][j].fillNeighborHexes();
			}
		}
		for(var i = 0; i < 31; i += 1){
			for(var j = 0; j < 26; j += 1){
				///*
				this.atlas[i][j].neighbors[0] = j > 0 ? this.atlas[i][j - 1] : null;
				this.atlas[i][j].neighbors[1] = i % 2 == 0 ? (i < 30 ? this.atlas[i + 1][j] : null) : (i < 30 && j > 0 ? this.atlas[i + 1][j - 1] : null);
				this.atlas[i][j].neighbors[2] = i % 2 == 1 ? (i < 30 ? this.atlas[i + 1][j] : null) : (i < 30 && j < 26 ? this.atlas[i + 1][j + 1] : null);
				this.atlas[i][j].neighbors[3] = j < 26 ? this.atlas[i][j + 1] : null;
				this.atlas[i][j].neighbors[4] = i % 2 == 1 ? (i > 0 ? this.atlas[i - 1][j] : null) : (i > 0 && j < 26 ? this.atlas[i - 1][j + 1] : null);
				this.atlas[i][j].neighbors[5] = i % 2 == 0 ? (i > 0 ? this.atlas[i - 1][j] : null) : (i > 0 && j > 0 ? this.atlas[i - 1][j - 1] : null);
				
				this.atlas[i][j].neighborHexes[3][0] = this.atlas[i][j].neighbors[3] ? this.atlas[i][j].neighbors[3].neighborHexes[0][1] : new RegionHex((HexVals.HEX_WIDTH + HexVals.HEX_DEPTH) * -2, HexVals.HEX_HEIGHT * -2, 4, 4, this.atlas[i][j].rollForNeighbor());
				this.atlas[i][j].neighborHexes[3][1] = this.atlas[i][j].neighbors[3] ? this.atlas[i][j].neighbors[3].neighborHexes[0][0] : new RegionHex((HexVals.HEX_WIDTH + HexVals.HEX_DEPTH) * -2, HexVals.HEX_HEIGHT * -2, 2, 4, this.atlas[i][j].rollForNeighbor());
				this.atlas[i][j].neighborHexes[4][0] = this.atlas[i][j].neighbors[4] ? this.atlas[i][j].neighbors[4].neighborHexes[1][1] : new RegionHex((HexVals.HEX_WIDTH + HexVals.HEX_DEPTH) * -2, HexVals.HEX_HEIGHT * -2, 1, 4, this.atlas[i][j].rollForNeighbor());
				this.atlas[i][j].neighborHexes[4][1] = this.atlas[i][j].neighbors[4] ? this.atlas[i][j].neighbors[4].neighborHexes[1][0] : new RegionHex((HexVals.HEX_WIDTH + HexVals.HEX_DEPTH) * -2, HexVals.HEX_HEIGHT * -2, 0, 2, this.atlas[i][j].rollForNeighbor());
				this.atlas[i][j].neighborHexes[5][0] = this.atlas[i][j].neighbors[5] ? this.atlas[i][j].neighbors[5].neighborHexes[2][1] : new RegionHex((HexVals.HEX_WIDTH + HexVals.HEX_DEPTH) * -2, HexVals.HEX_HEIGHT * -2, 0, 1, this.atlas[i][j].rollForNeighbor());
				this.atlas[i][j].neighborHexes[5][1] = this.atlas[i][j].neighbors[5] ? this.atlas[i][j].neighbors[5].neighborHexes[2][0] : new RegionHex((HexVals.HEX_WIDTH + HexVals.HEX_DEPTH) * -2, HexVals.HEX_HEIGHT * -2, 1, 0, this.atlas[i][j].rollForNeighbor());
				//*/
			}
		}
		for(var i = 0; i < 5; i += 1){
			for(var j = 0; j < 5; j += 1){
				this.draw.rect(HexVals.HEX_WIDTH * 6 + HexVals.HEX_DEPTH * 6, HexVals.HEX_HEIGHT * 10).attr({'fill': 'none', 'fill-opacity' : 0.0, 'pointer-events' : 'visiblePainted'}).stroke({'width': 1}).move(HexVals.HEX_WIDTH/2 + HexVals.HEX_DEPTH + (HexVals.HEX_WIDTH * 6 * i + HexVals.HEX_DEPTH * 6 * i), HexVals.HEX_HEIGHT + HexVals.HEX_HEIGHT * 10 * j);
			}
		}
		
		this.atlas[0][0].generateSubHexes();
		
		//draw.rect(HexVals.HEX_WIDTH * 6 + HexVals.HEX_DEPTH * 6, HexVals.HEX_HEIGHT * 10).attr({'fill-opacity' : 0.0}).stroke({'width': '1'}).move(HexVals.HEX_WIDTH/2 + HexVals.HEX_DEPTH, HexVals.HEX_HEIGHT * 2);
		//this.a.drawHex(draw);
  }
  
  onRightBarLoaded(isLoaded){
	  if(isLoaded){
		    
	  }
  }
  
  sprinkleTile(type, chance){
	  for(var i = 0; i < 31; i += 1){
			for(var j = 0; j < 26; j += 1){
				if(Math.floor(Math.random() * 100) < chance - 1){
					this.atlas[i][j].type = type;
					this.atlas[i][j].recolor();
					this.randomExpand(this.atlas[i][j]);
				}
			}
		}
	}
	simpleExpand(hex){
		for(var i = 0; i < hex.neighbors.length; i += 1){
			if(hex.neighbors[i] != null){
				hex.neighbors[i].type = hex.type;
				hex.neighbors[i].recolor();
			}
		}
	}
	randomExpand(hex){
		for(var i = 0; i < hex.neighbors.length; i += 1){
			if(hex.neighbors[i] != null){
				hex.neighbors[i].type = hex.rollForNeighbor();
				hex.neighbors[i].recolor();
			}
		}
	}
	
	downloadCSVAtlas(){
		var csvFile = []
		
		for(var i = 0; i < 31; i += 1){
			csvFile.push([]);
			for(var j = 0; j < 26; j += 1){
				csvFile[i].push(this.atlas[i][j].type);
			}
		}
		new Angular5Csv(csvFile, 'MyHexAtlas');
	}
	
	zoomOnSquare(){
		for(var i = 0; i < 31; i += 1){
			for(var j = 0; j < 26; j += 1){
				this.atlas[i][j].polygon.move((HexVals.HEX_DEPTH + HexVals.HEX_WIDTH) * -2, HexVals.HEX_HEIGHT * -2);
			}
		}
		for(var i = 0; i < 7; i += 1){
			for(var j = 0; j < 6; j += 1){
				for(var col = 0; col < 5; col += 1){
					for(var row = 0; row < this.atlas[i][j].hexes[col].length; row += 1){
						console.log(this.atlas[i][j].hexes[col][row])
						this.atlas[i][j].hexes[col][row].svgX = 
							(HexVals.HEX_DEPTH + HexVals.HEX_WIDTH/2) + 
							(HexVals.HEX_DEPTH + HexVals.HEX_WIDTH) * (this.atlas[i][j].hexes[col][row].gridX - 4);
							
						this.atlas[i][j].hexes[col][row].svgY = this.atlas[i][j].hexes[col][row].gridX % 2 == 1 ? (HexVals.HEX_HEIGHT * 2 * this.atlas[i][j].hexes[col][row].gridY) : (HexVals.HEX_HEIGHT + HexVals.HEX_HEIGHT * 2 * this.atlas[i][j].hexes[col][row].gridY);
						this.atlas[i][j].hexes[col][row].drawHex(this.draw);
					}
				}
			}
		}
	}
	
}
