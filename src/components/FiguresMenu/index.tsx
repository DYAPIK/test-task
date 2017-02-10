import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as block from 'bem-cn';
import Figure from 'components/Figure';
import actions from 'localRedux/actions';
import './style.styl';

interface IOwnProps {
    activeTable: number;
    tableMenuHeight: number | null;
    figureMenuWidth: number | null;
}

interface IDispatchProps {
    setFigurePosition: typeof actions.setFigurePosition;
    createFigurePosition: typeof actions.createFigurePosition;
}

type Props = IOwnProps & IDispatchProps;

class FiguresMenu extends React.Component<Props, {}> {

    private b = block('figures-menu');

    render () {
        const b = this.b;
        const { activeTable, setFigurePosition, createFigurePosition, tableMenuHeight, figureMenuWidth } = this.props;
        return (
            <div className={b()}>
                <div className={b('list-header')}>Фигуры</div>
                <div className={b('list-subheader')}>
                    <Figure
                        initial={true}
                        index={0}
                        setFigurePosition={setFigurePosition}
                        createFigurePosition={createFigurePosition}
                        type="sphere"
                        activeTable={activeTable}
                        offsetWidth={figureMenuWidth}
                        offsetHeight={tableMenuHeight}
                    />
                    <Figure
                        index={0}
                        initial={true}
                        setFigurePosition={setFigurePosition}
                        createFigurePosition={createFigurePosition}
                        type="square"
                        activeTable={activeTable}
                        offsetWidth={figureMenuWidth}
                        offsetHeight={tableMenuHeight}
                    />
                </div>
            </div>
        );
    }
}

export default FiguresMenu;
