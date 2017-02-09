import * as React from 'react';
import * as block from 'bem-cn';
import './style.styl';
import Element = JSX.Element;

interface IState {
    positionX: number | null;
    positionY: number | null;
}

class Sphere extends React.Component<{}, IState> {

    private b = block('sphere');
    private elementRef: HTMLDivElement;

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

    private startDrag(event: React.MouseEvent<HTMLDivElement>): void {
        // const a = new Sphere({ ref: this._onRef });
        // React.cloneElement(, { className: this.b(), ref: this._onRef, onMouseDown: this.startDrag });
        document.addEventListener('mousemove', this._mouseMove);
        document.addEventListener('mouseup', this.endDrag);
    }

    private _mouseMove(event: MouseEvent): void {
        const node = this.elementRef;
        node.style.left = `${event.pageX - node.offsetWidth / 2}px`;
        node.style.top = `${event.pageY - node.offsetHeight / 2}px`;
        this.forceUpdate();
    }

    private _onRef(ref: HTMLDivElement): void {
        if (ref) {
            this.elementRef = ref;
            ref.addEventListener('dragstart', () => { return false; })
        }
    }

    private endDrag(event: MouseEvent): void {
        document.removeEventListener('mousemove', this._mouseMove);
        document.removeEventListener('mouseup', this.endDrag);
        this.setState({
            positionX: event.pageX,
            positionY: event.pageY,
        });
    }

    render () {
        const b = this.b;
        return (
            <div
                onMouseDown={this.startDrag}
                className={b()}
            >
            </div>
        );
    }
}

export default Sphere;
