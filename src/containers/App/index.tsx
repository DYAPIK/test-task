import * as React from 'react';
import { connect } from 'react-redux';
import * as block from 'bem-cn';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TableMenu from 'components/TableMenu'
import FiguresMenu from 'components/FiguresMenu';


class App extends React.Component<{}, {}> {

    private b = block('main');

    render () {
        const b = this.b;
        return (
            <MuiThemeProvider>
                <div>
                    <FiguresMenu />
                    <TableMenu />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
