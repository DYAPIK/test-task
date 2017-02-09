import * as React from 'react';
import * as Redux from 'redux'
import * as block from 'bem-cn';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TableMenu from 'components/TableMenu'
import FiguresMenu from 'components/FiguresMenu';
import actions from 'localRedux/actions';
import { ITable } from 'types/app';

interface IStateProps {
    tables: ITable[][];
    activeTable: number;
}

interface IDispatchProps {
    chooseActiveTab: typeof actions.chooseActiveTab
    setFigurePosition: typeof actions.setFigurePosition
}

type Props = IStateProps & IDispatchProps;

function mapState(state: any): IStateProps {
    const { activeTable, tables }  = state.app;
    return {
        activeTable,
        tables,
    };
}

function mapDispatch(dispatch: Redux.Dispatch<IDispatchProps>): IDispatchProps {
    return Redux.bindActionCreators({
        ...actions,
    }, dispatch)
}

class App extends React.Component<Props, {}> {

    private b = block('main');

    render () {
        const b = this.b;
        const { chooseActiveTab, setFigurePosition, activeTable, tables } = this.props;
        return (
            <MuiThemeProvider>
                <div>
                    <FiguresMenu
                        activeTable={activeTable}
                        setFigurePosition={setFigurePosition}
                    />
                    <TableMenu
                        chooseActiveTab={chooseActiveTab}
                        tables={tables}
                        activeTable={activeTable}
                        setFigurePosition={setFigurePosition}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}


export { App };
export default connect(mapState, mapDispatch)(App);
