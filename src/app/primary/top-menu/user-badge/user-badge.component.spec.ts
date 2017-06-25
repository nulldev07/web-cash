import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBadgeComponent } from './user-badge.component';

describe('UserBadgeComponent', () => {
	let component: UserBadgeComponent;
	let fixture: ComponentFixture<UserBadgeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [UserBadgeComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UserBadgeComponent);
		component = fixture.componentInstance;
		component.user = {
			photoURL: '',
			displayName: 'John Doe',
			email: 'john.doe@example.com',
			providerId: '',
			uid: ''
		};
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
