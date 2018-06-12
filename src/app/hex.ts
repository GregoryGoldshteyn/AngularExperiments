export const TerrainToNumber = {'NONE' : 0, 'WATER': 1, 'SWAMP' : 2, 'DESERT' : 3, 'BADLANDS' : 4, 'PLAINS' : 5 , 'COASTAL_PLAINS' : 6, 'FARMLAND' : 7, 'FOREST' : 8, 'LIGHT_FOREST' : 9, 'HEAVY_FOREST' : 10, 'FORESTED_HILLS' : 11, 'FORESTED_MOUNTAINS' : 12, 'HILLS' : 13, 'CANYON' : 14, 'MOUNTAINS' : 15, 'PEAK' : 16, 'PASS' : 17, 'VOLCANO' : 18};
export const NumberToTerrain = ['NONE', 'WATER', 'SWAMP', 'DESERT', 'BADLANDS', 'PLAINS', 'COASTAL_PLAINS', 'FARMLAND', 'FOREST', 'LIGHT_FOREST', 'HEAVY_FOREST', 'FORESTED_HILLS', 'FORESTED_MOUNTAINS', 'HILLS', 'CANYON', 'MOUNTAINS', 'PEAK', 'PASS', 'VOLCANO'];
export const NumberToInitial = ['XX', 'WW', 'SW', 'DS', 'BD', 'PL', 'CP', 'FA', 'FR', 'LF', 'HF', 'FH', 'FM', 'HL', 'CY', 'MT', 'PK', 'PS', 'VL'];
export const TerrainProbabilityThresholds = {
		'WATER' : {'PRIMARY': ['WATER'], 
			'SECONDARY' : ['WATER'], 
			'TERTIARY' : ['PLAINS'], 
			'WILDCARD' : ['SWAMP', 'LIGHT_FOREST']
			},
		'SWAMP' : {'PRIMARY': ['SWAMP'], 
			'SECONDARY' : ['PLAINS'], 
			'TERTIARY' : ['FOREST'], 
			'WILDCARD' : ['WATER']
			},
		'DESERT' : {'PRIMARY': ['DESERT'], 
			'SECONDARY' : ['BADLANDS', 'HILLS', 'HILLS'], 
			'TERTIARY' : ['PLAINS'], 
			'WILDCARD' : ['BADLANDS', 'MOUNTAINS']
			},
		'BADLANDS' : {'PRIMARY': ['BADLANDS'], 
			'SECONDARY' : ['DESERT'], 
			'TERTIARY' : ['HILLS'], 
			'WILDCARD' : ['HILLS', 'MOUNTAINS']
			},
		'PLAINS' : {'PRIMARY': ['PLAINS'], 
			'SECONDARY' : ['FOREST'], 
			'TERTIARY' : ['HILLS'], 
			'WILDCARD' : ['WATER', 'SWAMP', 'DESERT']
			},
		'COASTAL_PLAINS' : {'PRIMARY': ['COASTAL_PLAINS'], 
			'SECONDARY' : ['PLAINS', 'SWAMP'], 
			'TERTIARY' : ['WATER'], 
			'WILDCARD' : ['LIGHT_FOREST']
			},
		'FARMLAND' : {'PRIMARY': ['FARMLAND'], 
			'SECONDARY' : ['PLAINS'], 
			'TERTIARY' : ['LIGHT_FOREST'], 
			'WILDCARD' : ['WATER', 'SWAMP', 'HILLS']
			},
		'FOREST' : {'PRIMARY': ['FOREST', 'FOREST', 'HEAVY_FOREST'], 
			'SECONDARY' : ['PLAINS'], 
			'TERTIARY' : ['FORESTED_HILLS', 'FORESTED_HILLS', 'HILLS'], 
			'WILDCARD' : ['WATER', 'SWAMP', 'WATER', 'SWAMP', 'WATER', 'SWAMP', 'FORESTED_MOUNTAINS', 'FORESTED_MOUNTAINS', 'MOUNTAINS']
			},
		'LIGHT_FOREST' : {'PRIMARY': ['LIGHT_FOREST', 'LIGHT_FOREST', 'PLAINS'], 
			'SECONDARY' : ['PLAINS'], 
			'TERTIARY' : ['FOREST', 'FOREST', 'HEAVY_FOREST'], 
			'WILDCARD' : ['WATER', 'SWAMP']
			},
		'HEAVY_FOREST' : {'PRIMARY': ['HEAVY_FOREST', 'HEAVY_FOREST', 'FOREST'], 
			'SECONDARY' : ['LIGHT_FOREST'], 
			'TERTIARY' : ['PLAINS', 'FOREST', 'HEAVY_FOREST'], 
			'WILDCARD' : ['WATER', 'FORESTED_HILLS', 'SWAMP']
			},
		'FORESTED_HILLS' : {'PRIMARY': ['FORESTED_HILLS', 'FOREST'], 
			'SECONDARY' : ['HILLS'], 
			'TERTIARY' : ['PLAINS', 'FOREST', 'HEAVY_FOREST'], 
			'WILDCARD' : ['LIGHT_FOREST']
			},
		'FORESTED_MOUNTAINS' : {'PRIMARY': ['FORESTED_HILLS', 'FORESTED_MOUNTAINS'], 
			'SECONDARY' : ['MOUNTAINS'], 
			'TERTIARY' : ['FOREST', 'HEAVY_FOREST'], 
			'WILDCARD' : ['LIGHT_FOREST']
			},
		'HILLS' : {'PRIMARY': ['HILLS'], 
			'SECONDARY' : ['MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'PASS', 'PASS', 'PASS', 'PASS'], 
			'TERTIARY' : ['PLAINS'], 
			'WILDCARD' : ['FOREST', 'FORESTED_HILLS', 'FORESTED_HILLS', 'WATER', 'DESERT', 'WATER', 'DESERT', 'WATER', 'DESERT']
			},
		'MOUNTAINS' : {'PRIMARY': ['VOLCANO', 'PASS', 'PASS', 'PEAK', 'PEAK', 'PEAK', 'PEAK', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS'], 
			'SECONDARY' : ['HILLS'], 
			'TERTIARY' : ['FOREST', 'FOREST', 'FORESTED_MOUNTAINS'],
			'WILDCARD' : ['BADLANDS']
			},
		'VOLCANO' : {'PRIMARY': ['VOLCANO', 'PASS', 'PASS', 'PEAK', 'PEAK', 'PEAK', 'PEAK', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS'], 
			'SECONDARY' : ['HILLS'], 
			'TERTIARY' : ['FOREST', 'FOREST', 'FORESTED_MOUNTAINS'],
			'WILDCARD' : ['BADLANDS']
			},
		'PEAK' : {'PRIMARY': ['VOLCANO', 'PASS', 'PASS', 'PEAK', 'PEAK', 'PEAK', 'PEAK', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS'], 
			'SECONDARY' : ['HILLS'], 
			'TERTIARY' : ['FOREST', 'FOREST', 'FORESTED_MOUNTAINS'],
			'WILDCARD' : ['BADLANDS']
			},
		'PASS' : {'PRIMARY': ['VOLCANO', 'PASS', 'PASS', 'PEAK', 'PEAK', 'PEAK', 'PEAK', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS', 'MOUNTAINS'], 
			'SECONDARY' : ['HILLS'], 
			'TERTIARY' : ['FOREST', 'FOREST', 'FORESTED_MOUNTAINS'],
			'WILDCARD' : ['BADLANDS']
			}
		};

export const NumberToColor = [rgbToHexString(0, 0, 0), //None
	rgbToHexString(11, 67, 182), //Water
	rgbToHexString(0, 121, 107), //Swamp
	rgbToHexString(255, 235, 59), //Desert
	rgbToHexString(251, 188, 5), //Badlands
	rgbToHexString(99, 188, 102), //Plains
	rgbToHexString(99, 188, 102), //Coastal plains
	rgbToHexString(99, 188, 102), //Farmland
	rgbToHexString(0, 145, 76), //Forest
	rgbToHexString(72, 176, 75), //Light forest
	rgbToHexString(0, 129, 65), //Heavy forest
	rgbToHexString(0, 145, 76), //Forest Hill
	rgbToHexString(0, 129, 65), //Forest Mtn
	rgbToHexString(244, 67, 54), //Hill
	rgbToHexString(251, 86, 88), //Canyon
	rgbToHexString(60, 70, 73), //Mtn
	rgbToHexString(180, 224, 225), //Peak
	rgbToHexString(79, 91, 94), //Pass
	rgbToHexString(198, 40, 40) //Volcano
];

function chooseFromList(l){
	return l[Math.floor(Math.random() * l.length)];
}

function rgbToHexString(r, g, b){
	return '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
}

function generateAtlasFromSeeds(seeds : Array<AtlasHex>, atlasWidth=31, atlasHeight=27){
	
	
	
}

export class DrawableHex{
	svgX = 0;
	svgY = 0;
	gridX = 0;
	gridY = 0;
	type = 'NONE';
	isDrawn = false;
	polygon;
	constructor(svgX, svgY, gridX, gridY, type){
		this.svgX = svgX;
		this.svgY = svgY;
		this.gridX = gridX;
		this.gridY = gridY;
		this.type = type;
	}
	drawHex(svg){
		this.polygon = svg.polygon(
			[[HexVals.HEX_DEPTH + this.svgX, this.svgY],
			[HexVals.HEX_DEPTH + this.svgX + HexVals.HEX_WIDTH, this.svgY],
			[HexVals.HEX_DEPTH + HexVals.HEX_DEPTH + this.svgX + HexVals.HEX_WIDTH, this.svgY + HexVals.HEX_HEIGHT],
			[HexVals.HEX_DEPTH + this.svgX + HexVals.HEX_WIDTH, this.svgY + HexVals.HEX_HEIGHT + HexVals.HEX_HEIGHT],
			[this.svgX + HexVals.HEX_DEPTH, this.svgY + HexVals.HEX_HEIGHT + HexVals.HEX_HEIGHT],
			[this.svgX, this.svgY + HexVals.HEX_HEIGHT]]
		).fill(NumberToColor[TerrainToNumber[this.type]])
		.stroke({'width': '1'});
		this.isDrawn = true;
	}
	setOnClickListener(onClickFunction, parent){
		this.polygon.click(() => {onClickFunction(this, parent)});
	}
	recolor(){
		this.polygon.attr({'fill': NumberToColor[TerrainToNumber[this.type]]});
	}
}

export class SuperHex extends DrawableHex{
	constructor(svgX, svgY, gridX, gridY, type){
		super(svgX, svgY, gridX, gridY, type)
	}
	RollMatrix = ['PRIMARY', 'PRIMARY', 'PRIMARY', 'PRIMARY', 'PRIMARY', 'PRIMARY', 'PRIMARY', 'SECONDARY', 'SECONDARY', 'PRIMARY', 'TERTIARY', 'WILDCARD'];
	neighbors : DrawableHex[];
	hexes : DrawableHex[][];
	neighborHexes : DrawableHex[][];
	
	//The tile polls its neighbor tiles for its new identity
	voteForSelf(){
		
	}
	//The tile rolls for a tile based on its roll matrix and identity
	rollForNeighbor(){
		return this.choice(TerrainProbabilityThresholds[this.type][this.choice(this.RollMatrix)]);
	}
	
	choice(arr){
		return arr[Math.floor(Math.random() * arr.length)];
	}
}

export class AtlasHex extends SuperHex {
	//An Atlas Hex is 25 miles and the largest hex
	//It's sub-hexes are region hexes, at 5 miles
	
	//Atlas hexes next to this atlas hex
	neighbors : AtlasHex[] = [null, null, null, null, null, null];
	//Region hexes within the atlas hex
	hexes : RegionHex[][] = [[null, null, null],[null, null, null, null],[null, null, null, null, null],[null, null, null, null],[null, null, null]];
	//Region hexes belonging to other atlas hexes
	neighborHexes : RegionHex[][] = [[null, null],[null, null],[null, null],[null, null],[null, null],[null, null]];
	
	constructor(svgX, svgY, gridX, gridY, type){
		super(svgX, svgY, gridX, gridY, type)
	}
	
	generateSubHexes(){
		for(var i = 0; i < this.hexes.length; i += 1){
			for(var j = 0; j < this.hexes[i].length; j += 1){
				this.hexes[i][j] = new RegionHex(
					(HexVals.HEX_WIDTH + HexVals.HEX_DEPTH) * -2, 
					HexVals.HEX_HEIGHT * -2,
					this.gridX * 5 + 1 + i,
					i == 0 || i == 4 ? (this.gridX % 2 == 0 ? j + 1 + this.gridY * 5 : j - 2 + this.gridY * 5): (this.gridX % 2 == 0 ? j + this.gridY * 5 : j - 3 + this.gridY * 5), this.rollForNeighbor());
			}
		}
	}
	fillNeighborHexes(){
		this.neighborHexes[0][0] = new RegionHex((HexVals.HEX_WIDTH + HexVals.HEX_DEPTH) * -2, HexVals.HEX_HEIGHT * -2, 2, -1, this.rollForNeighbor());
		this.neighborHexes[0][1] = new RegionHex((HexVals.HEX_WIDTH + HexVals.HEX_DEPTH) * -2, HexVals.HEX_HEIGHT * -2, 4, -1, this.rollForNeighbor());
		this.neighborHexes[1][0] = new RegionHex((HexVals.HEX_WIDTH + HexVals.HEX_DEPTH) * -2, HexVals.HEX_HEIGHT * -2, 5, 0, this.rollForNeighbor());
		this.neighborHexes[1][1] = new RegionHex((HexVals.HEX_WIDTH + HexVals.HEX_DEPTH) * -2, HexVals.HEX_HEIGHT * -2, 6, 1, this.rollForNeighbor());
		this.neighborHexes[2][0] = new RegionHex((HexVals.HEX_WIDTH + HexVals.HEX_DEPTH) * -2, HexVals.HEX_HEIGHT * -2, 6, 2, this.rollForNeighbor());
		this.neighborHexes[2][1] = new RegionHex((HexVals.HEX_WIDTH + HexVals.HEX_DEPTH) * -2, HexVals.HEX_HEIGHT * -2, 5, 4, this.rollForNeighbor());
	}
}
		
export class RegionHex extends SuperHex {
	//A region Hex is 5 miles
	//It's sub-hexes are local hexes, at 1 mile
	
	neighbors : RegionHex[] = [null, null, null, null, null, null];
	hexes : LocalHex[][] = [[null, null, null],[null, null, null, null],[null, null, null, null, null],[null, null, null, null],[null, null, null]];
	neighborHexes : LocalHex[][] = [[null, null],[null, null],[null, null],[null, null],[null, null],[null, null]];
	
	constructor(svgX, svgY, gridX, gridY, type){
		super(svgX, svgY, gridX, gridY, type);
	}
}

export class LocalHex extends SuperHex{
	//A local Hex is 1 mile
	//It's sub-hexes are area hexes, at 1000 feet
	
	neighbors : LocalHex[] = [null, null, null, null, null, null];
	hexes : AreaHex[][] = [[null, null, null],[null, null, null, null],[null, null, null, null, null],[null, null, null, null],[null, null, null]];
	neighborHexes : AreaHex[][] = [[null, null],[null, null],[null, null],[null, null],[null, null],[null, null]];
	isDrawn = false;
	constructor(svgX, svgY, gridX, gridY, type){
		super(svgX, svgY, gridX, gridY, type)
	}
}

export class AreaHex extends DrawableHex{
	neighbors : AreaHex[] = [null, null, null, null, null, null];
}

export class HexVals{
	static HEX_WIDTH = 20;
	static HEX_DEPTH = 10;
	static HEX_HEIGHT = 14;
}