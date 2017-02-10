import { Map, fromJS } from 'immutable';
import { IReduxState, IAction } from 'types/app';
import initialState from '../initial';


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
    case ('CREATE_FIGURE_POSITION'): {
        interface IData {
            positionX: number;
            positionY: number;
            activeTable: number;
            type: string;
        }
        const { positionX, positionY, activeTable, type } = action.payload as IData;
        const currentTable = imState.getIn(['tables', activeTable]).toJS();
        return imState
            .setIn(['tables', activeTable, currentTable.length, 'positionX'], positionX)
            .setIn(['tables', activeTable, currentTable.length, 'positionY'], positionY)
            .setIn(['tables', activeTable, currentTable.length, 'type'], type)
            .toJS()
    }
    default:
        return state;
    }
}

export default reducer;
