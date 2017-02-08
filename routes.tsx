import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App }  from './src/containers';

function createRoutes () {
    return (
        <Route path="/" component={App} />
    );
}

export default createRoutes;
