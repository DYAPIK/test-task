import * as React from 'react';
import * as block from 'bem-cn';
import './style.styl';


class Square extends React.Component<{}, {}> {

    private b = block('square');

    render () {
        const b = this.b;
        return (
            <div className={b()}></div>
        );
    }
}

export default Square;
