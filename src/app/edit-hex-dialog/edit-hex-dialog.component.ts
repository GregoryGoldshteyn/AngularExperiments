import { Component, OnInit, Input } from '@angular/core';
import { DrawableHex } from '../hex'

@Component({
  selector: 'app-edit-hex-dialog',
  templateUrl: './edit-hex-dialog.component.html',
  styleUrls: ['./edit-hex-dialog.component.css']
})
export class EditHexDialogComponent implements OnInit {

	@Input() hex: DrawableHex;

  constructor() { }

  ngOnInit() {
  }
}
