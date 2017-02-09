import * as React from 'react';
import * as block from 'bem-cn';
import Figure from 'components/Figure';
import actions from 'localRedux/actions';
import './style.styl';

interface IOwnProps {
    activeTable: number;
}

interface IDispatchProps {
    setFigurePosition: typeof actions.setFigurePosition;
}

type Props = IOwnProps & IDispatchProps;

class FiguresMenu extends React.Component<Props, {}> {

    private b = block('figures-menu');

    render () {
        const b = this.b;
        const { activeTable, setFigurePosition } = this.props;
        return (
            <div className={b()}>
                <div className={b('list-header')}>Фигуры</div>
                <div className={b('list-subheader')}>
                    <ul className={b('list-item')}>
                        <Figure
                            index={0}
                            setFigurePosition={setFigurePosition}
                            type="sphere"
                            activeTable={activeTable}
                        />
                    </ul>
                    <ul className={b('list-item')}>
                        <Figure
                            index={0}
                            setFigurePosition={setFigurePosition}
                            type="square"
                            activeTable={activeTable}
                        />
                    </ul>
                </div>
            </div>
        );
    }
}

export default FiguresMenu;
