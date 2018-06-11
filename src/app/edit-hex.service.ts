import { Injectable } from '@angular/core';
import { DrawableHex } from './hex';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EditHexService {

	private editHex = new Subject<DrawableHex>();
	
  constructor() { }
  
  selectHexToEdit(hex : DrawableHex){
	  //console.log(hex)
	  this.editHex.next(hex);
  }
  
  getEditedHex() : Observable<DrawableHex>{
	  //console.log(this.editHex)
	  return this.editHex.asObservable();
  }
}
