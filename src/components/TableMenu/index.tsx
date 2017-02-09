import * as React from 'react';
import * as block from 'bem-cn';
import { Tabs, Tab } from 'material-ui/Tabs';
import FiguresCanvas from 'components/FiguresCanvas';
import actions from 'localRedux/actions';
import { ITable } from 'types/app';
import './style.styl';


interface IOwnProps {
    tables: ITable[][]
    activeTable: number;
}

interface IDispatchProps {
    chooseActiveTab: typeof actions.chooseActiveTab;
    setFigurePosition: typeof actions.setFigurePosition;
}

type Props = IOwnProps & IDispatchProps;

class TableMenu extends React.Component<Props, {}> {

    private b = block('table-menu');

    private onClickTab(tab: React.Component<any, any>) {
        this.props.chooseActiveTab(tab.props.index);
    }

    constructor(props: Props) {
        super(props);
        this.onClickTab = this.onClickTab.bind(this);
    }


    render () {
        const b = this.b;
        const { tables, activeTable, setFigurePosition } = this.props;
        return (
            <div className={b()}>
                <Tabs>
                    {tables.map((item, index) => {
                        return (
                            <Tab label={`Доска ${index + 1}`}
                                onActive={this.onClickTab}
                            >
                                <FiguresCanvas
                                    tableData={tables[index]}
                                    activeTable={activeTable}
                                    setFigurePosition={setFigurePosition}
                                />
                            </Tab>
                        )
                    })}
                </Tabs>
            </div>
        );
    }
}

export default TableMenu;
