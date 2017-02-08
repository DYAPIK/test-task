import * as React from 'react';
import * as block from 'bem-cn';
import './style.styl';

interface IState {
    positionX: number | null;
    positionY: number | null;
}

class Sphere extends React.Component<{}, IState> {

    private b = block('sphere');

    constructor(props: {}) {
        super(props);
        this.startDrag  = this.startDrag.bind(this);
        this.endDrag    = this.endDrag.bind(this);
        this._mouseMove = this._mouseMove.bind(this);
        this._onRef     = this._onRef.bind(this);
        this.state = {
            positionX: null,
            positionY: null,
        }

    }

    private startDrag(startEvent: React.MouseEvent<HTMLDivElement>) {
        document.addEventListener('mousemove', this._mouseMove);
        document.addEventListener('mouseup', this.endDrag);
    }

    private _mouseMove(event: MouseEvent): void {
        console.log(event.pageX);
    }

    private _onRef(ref: HTMLDivElement) {
        this.squareRef= ref;
    }

    private endDrag(event: MouseEvent) {
        document.removeEventListener('mousemove', this._mouseMove);
        document.removeEventListener('mouseup', this.endDrag);
        this.setState({
            positionX: event.pageX,
            positionY: event.pageY,
        });
    }

    render () {
        const b = this.b;
        console.log(this.state.positionX);
        return (
            <div
                onRef={this._onRef}
                onMouseDown={this.startDrag}
                className={b()}
            >
            </div>
        );
    }
}

export default Sphere;
