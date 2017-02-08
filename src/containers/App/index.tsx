import * as React from 'react';
import { connect } from 'react-redux';
import * as block from 'bem-cn';
import TableMenu from 'components/TableMenu'

class App extends React.Component<{}, {}> {

    private b = block('main');

    render () {
        const b = this.b;
        return (
            <div className={b()}>
               <TableMenu />
            </div>
        );
    }
}

export default App;
