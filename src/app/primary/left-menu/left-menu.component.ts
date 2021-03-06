import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'wc-left-menu',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './left-menu.component.html',
	styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

	@Input() menu;

	constructor() { }

	ngOnInit() {
	}

}
