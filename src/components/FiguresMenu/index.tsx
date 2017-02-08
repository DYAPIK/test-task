import * as React from 'react';
import * as block from 'bem-cn';
import Square from 'components/Square';
import Sphere from 'components/Sphere';
import './style.styl';



class FiguresMenu extends React.Component<{}, {}> {

    private b = block('figures-menu');

    render () {
        const b = this.b;
        return (
            <div className={b()}>
                <div className={b('list-header')}>Фигуры</div>
                <div className={b('list-subheader')}>
                    <ul className={b('list-item')}>
                        <Square />
                    </ul>
                    <ul className={b('list-item')}>
                        <Sphere />
                    </ul>
                </div>
            </div>
        );
    }
}

export default FiguresMenu;
