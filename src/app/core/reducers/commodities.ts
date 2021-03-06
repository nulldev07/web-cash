import { Map } from 'immutable';
import { tassign } from 'tassign';
import { ICommodity } from '../models';
import * as commodity from '../actions/commodity';

export interface State {
	loading?: boolean;
	loaded?: boolean;
	entities?: Map<string, ICommodity>,
	selectedId?: string | null;
}


const initialState = {
	loading: false,
	loaded: false,
	entities: Map<string, ICommodity>(),
	selectedId: null
};

export function reducer(state = initialState, action: commodity.Actions): State {
	switch (action.type) {
		case commodity.LOAD: {
			return tassign(state, {
				loading: true
			});
		}
		case commodity.LOAD_SUCCESS: {
			return tassign(state, {
				loading: false,
				loaded: true,
				entities: Map<string, ICommodity>(action.payload.map(c => [c.guid, c]))
			});
		}
		case commodity.LOAD_FAIL: {
			return tassign(state, {
				loading: false,
				loaded: false
			});
		}
		default: return state;
	}
}

export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
export const getEntities = (state: State) => state.entities;
