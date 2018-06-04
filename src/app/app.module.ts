import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

import { AppComponent } from './app.component';
import { MaterialComponent } from './material/material.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { BadRouteComponent } from './bad-route/bad-route.component';
import { LeftSidenavComponent } from './left-sidenav/left-sidenav.component';
import { RightSidenavComponent } from './right-sidenav/right-sidenav.component';
import { HexRollerComponent } from './hex-roller/hex-roller.component';
import { HexMapperComponent } from './hex-mapper/hex-mapper.component';
import { EditHexDialogComponent } from './edit-hex-dialog/edit-hex-dialog.component';

import { EditHexService } from './edit-hex.service';

const appRoutes = [
	{ path: 'home',		component: HomeComponent,	label: 'Home' },
	{ path: 'resume',	component: ResumeComponent,	label: 'Resume' },
	{ path: 'hexmapper',	component: HexMapperComponent,	label: 'Hex Mapper' },
	{ path: 'about',	component: AboutComponent,	label: 'About' }
];

@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    BadRouteComponent,
    LeftSidenavComponent,
    RightSidenavComponent,
    HexRollerComponent,
    HexMapperComponent,
    EditHexDialogComponent
  ],
  imports: [
    BrowserModule,
	MatTabsModule,
	MatToolbarModule,
	MatCardModule,
	MatSidenavModule,
	MatExpansionModule,
	MatListModule,
	MatButtonModule,
	MatIconModule,
	MatSelectModule,
	BrowserAnimationsModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [EditHexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
