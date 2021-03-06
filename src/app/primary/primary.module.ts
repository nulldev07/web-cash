import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdButtonModule, MdDialogModule, MdProgressBarModule, MdIconModule, MdMenuModule } from '@angular/material';

import { SharedModule } from 'app/shared/shared.module';

import { LeftMenuComponent } from './left-menu/left-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { LogoComponent } from './logo/logo.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { UserBadgeComponent } from './top-menu/user-badge/user-badge.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
	imports: [
		// @angular
		RouterModule,
		CommonModule,

		// material
		MdDialogModule,
		MdButtonModule,
		MdProgressBarModule,
		MdIconModule,
		MdMenuModule,

		// local
		SharedModule
	],
	declarations: [LeftMenuComponent, TopMenuComponent, LogoComponent, WorkspaceComponent, UserBadgeComponent, HomeComponent, HeaderComponent],
	exports: [LeftMenuComponent, HeaderComponent, WorkspaceComponent]
})
export class PrimaryModule { }
