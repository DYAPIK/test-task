import { Map, fromJS } from 'immutable';
import initialState from '../initial';
import { IReduxState, IAction } from 'types/app';


function reducer(state: IReduxState = initialState, action: IAction): IReduxState {
    const imState: Map<string, any> = fromJS(state);
    switch (action.type) {

    default:
        return state;
    }
}

export default reducer;
