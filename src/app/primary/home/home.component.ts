import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'wc-home',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
