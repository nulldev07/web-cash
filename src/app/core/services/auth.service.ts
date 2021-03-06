import { IUserInfo } from '../models/user-info';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth, User } from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as user from '../actions/user';


@Injectable()
export class AuthService {
	user$: Observable<IUserInfo>;
	redirectUrl: string;

	public get isAuthenticated(): boolean {
		return !!this.afAuth.auth.currentUser;
	}

	constructor(private afAuth: AngularFireAuth, private store: Store<fromRoot.State>) {
		// afAuth.auth.
		this.user$ = afAuth.authState;
		this.user$.subscribe(u => {
			console.log('User Info: %o', afAuth.auth.currentUser);
			const action = !!u ? new user.SignInSuccessAction({
				displayName: u.displayName,
				email: u.email,
				photoURL: u.photoURL,
				providerId: u.providerId,
				uid: u.uid
			}) : new user.SignOutSuccessAction();
			store.dispatch(action);
		});
	}

	async signIn() {
		try {
			await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
		} catch (error) {
			this.store.dispatch(new user.SignInFailAction(error));
		}
	}

	async signOut() {
		try {
			await this.afAuth.auth.signOut();
		} catch (error) {
			this.store.dispatch(new user.SignOutFailAction(error));
		}
	}
}
