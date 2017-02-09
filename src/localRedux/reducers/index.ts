import { Map, fromJS } from 'immutable';
import initialState from '../initial';
import { IReduxState, IAction } from 'types/app';


function reducer(state: IReduxState = initialState, action: IAction): IReduxState {
    const imState: Map<string, any> = fromJS(state);
    switch (action.type) {
    case ('CHOOSE_ACTIVE_TAB'): {
        return imState
            .set('activeTable', action.payload)
            .toJS()
    }
    case ('SET_FIGURE_POSITION'): {
        interface IData {
            positionX: number;
            positionY: number;
            activeTable: number;
            activeItem: number | null
            type: string;
        }
        const { positionX, positionY, activeItem, activeTable, type } = action.payload as IData;
        return imState
            .setIn(['tables', activeTable, activeItem, 'positionX'], positionX)
            .setIn(['tables', activeTable, activeItem, 'positionY'], positionY)
            .setIn(['tables', activeTable, activeItem, 'type'], type)
            .toJS()
    }
    default:
        return state;
    }
}

export default reducer;
