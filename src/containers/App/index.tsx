import * as React from 'react';
import * as ReactDOM from 'react-dom';
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
    createFigurePosition: typeof actions.createFigurePosition
}

interface IState {
    tableMenuHeight: number | null;
    figureMenuWidth: number | null;
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



class App extends React.Component<Props, IState> {

    private b = block('main');

    constructor(props: Props & IState) {
        super(props);
        this.onTableMenuRef = this.onTableMenuRef.bind(this);
        this.onFigureMenuRef = this.onFigureMenuRef.bind(this);
        this.state = {
            tableMenuHeight: null,
            figureMenuWidth: null,
        }
    }

    onTableMenuRef(ref: React.Component<any, any>): void {
        if (ref) {
            this.setState({ tableMenuHeight: ReactDOM.findDOMNode(ref).clientHeight });
        }
    }

    onFigureMenuRef(ref: React.Component<any, any>): void {
        if (ref) {
            this.setState({
                ...this.state,
                figureMenuWidth: ReactDOM.findDOMNode(ref).clientWidth
            });
        }
    }

    render () {
        const b = this.b;
        const { chooseActiveTab, setFigurePosition, createFigurePosition, activeTable, tables } = this.props;
        const { tableMenuHeight, figureMenuWidth } = this.state;
        return (
            <MuiThemeProvider>
                <div>
                    <FiguresMenu
                        activeTable={activeTable}
                        setFigurePosition={setFigurePosition}
                        createFigurePosition={createFigurePosition}
                        tableMenuHeight={tableMenuHeight}
                        figureMenuWidth={figureMenuWidth}
                        ref={this.onFigureMenuRef}
                    />
                    <TableMenu
                        chooseActiveTab={chooseActiveTab}
                        tables={tables}
                        activeTable={activeTable}
                        setFigurePosition={setFigurePosition}
                        createFigurePosition={createFigurePosition}
                        tableMenuHeight={tableMenuHeight}
                        figureMenuWidth={figureMenuWidth}
                        ref={this.onTableMenuRef}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}


export { App };
export default connect(mapState, mapDispatch)(App);
