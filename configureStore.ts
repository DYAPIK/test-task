import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers,
    Store,
    Middleware
} from 'redux';
import thunk from 'redux-thunk';
import { IReduxState } from './src/types/app';

import chessReducer from './src/localRedux/reducers';

interface IStoreData {
    store: Store<IReduxState>
}

function configureStore (): IStoreData {
    const reducer = combineReducers({
        chess: chessReducer,
    });
    const middlewares: Middleware[] = [
        thunk
    ];

    const store: Store<IReduxState> = createStore(
        reducer,
        compose(
            applyMiddleware(...middlewares),
            ('development' === process.env.NODE_ENV && window.devToolsExtension) ? window.devToolsExtension() : (arg: any) => arg
        ),
    ) as Store<IReduxState>;

    return {
        store,
    };
}

export default configureStore;
