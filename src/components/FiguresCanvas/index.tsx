import * as React from 'react';
import * as block from 'bem-cn';
import { ITable } from 'types/app';
import Figure from 'components/Figure';
import actions from 'localRedux/actions';
import './style.styl';

interface IOwnProps {
    tableData: ITable[]
    activeTable: number;
}

interface IDispatchProps {
    setFigurePosition: typeof actions.setFigurePosition;
}

type Props = IOwnProps & IDispatchProps;

class FiguresCanvas extends React.Component<Props, {}> {

    private b = block('figures-canvas');

    render () {
        const b = this.b;
        const { tableData, activeTable, setFigurePosition } = this.props;
        return (
            <div className={b()}>
                {tableData.map((item, index) => {
                    return (
                        <Figure
                            key={index}
                            index={index}
                            type={item.type}
                            left={item.positionX}
                            top={item.positionY}
                            activeTable={activeTable}
                            setFigurePosition={setFigurePosition}
                        />
                    )
                })}
            </div>
        );
    }
}

export default FiguresCanvas;
