import { IReduxState } from '../types/app';

const initialState: IReduxState = {
    tables: [
        [],
        [],
        [],
    ],
    activeTable: 0,
};

export default initialState;
