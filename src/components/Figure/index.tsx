import * as React from 'react';
import * as block from 'bem-cn';
import './style.styl';
import actions from 'localRedux/actions';
import Element = JSX.Element;

interface IState {
    items: IElement[];
    activeItem: number | null;
}

interface IElement {
    positionX: number | null,
    positionY: number | null,
    initial: boolean;
}

interface IOwnProps {
    type: string;
    activeTable: number;
    index?: number;
    top?: number;
    left?: number;
}

interface IDispatchProps {
    setFigurePosition: typeof actions.setFigurePosition;
}

type Props = IOwnProps & IDispatchProps;

class Figure extends React.Component<Props, IState> {

    private b = block('figure');
    private itemsRefs: HTMLDivElement[] = [];
    private figureRef: HTMLDivElement;

    constructor(props: Props) {
        super(props);
        this._startDrag  = this._startDrag.bind(this);
        this._endDrag    = this._endDrag.bind(this);
        this._mouseMove  = this._mouseMove.bind(this);
        this._onRef      = this._onRef.bind(this);
        this.state = {
            activeItem: null,
            items: [
                {
                    initial: true,
                    positionX: null,
                    positionY: null,
                }
            ],
        }
    }

    private _startDrag(event: React.MouseEvent<HTMLDivElement>, index: number): void {
        this.setState({ activeItem: index });
        document.addEventListener('mousemove', this._mouseMove);
        document.addEventListener('mouseup', this._endDrag);
        // if (this.state.items[index].initial) {
        //     const newItems = this.state.items.slice();
        //     newItems.push({ positionY: event.pageY, positionX: event.pageX, initial: true });
        //     newItems[index].initial = !newItems[index].initial;
        //     this.setState({
        //         items: [...newItems]
        //     });
        // }
    }

    private _mouseMove(event: MouseEvent): void {
        if (this.state.activeItem !== null) {
            // const node = this.itemsRefs[this.state.activeItem];
            const node = this.figureRef;
            node.style.left = `${event.pageX - node.offsetWidth / 2}px`;
            node.style.top = `${event.pageY - node.offsetHeight / 2}px`;
            this.forceUpdate();
        }
    }

    private _onRef(ref: HTMLDivElement): void {
        if (ref) {
            // this.itemsRefs.push(ref);
            this.figureRef = ref;
            ref.addEventListener('dragstart', () => { return false; })
        }
    }

    private _endDrag(event: MouseEvent): void {
        const { setFigurePosition, activeTable, type } = this.props;
        document.removeEventListener('mousemove', this._mouseMove );
        document.removeEventListener('mouseup', this._endDrag );
        const args = {
            positionX: event.pageX,
            positionY: event.pageY,
            activeItem: this.state.activeItem,
            activeTable: activeTable,
            type,
        };
        setFigurePosition(args);
    }


// <div>
// {this.state.items.map((item, index) => {
//     return (
// <div
//     style={{ top: top, left: left }}
// key={index}
// ref={this._onRef}
// onMouseDown={(event) => { this._startDrag(event, index) }}
// className={b(type)}
//     >
//     </div>
// )
// })}
// </div>

    render () {
        const b = this.b;
        const { type, index, top, left } = this.props;
        return (
            <div
                style={{ top: top, left: left }}
                key={index}
                ref={this._onRef}
                onMouseDown={(event) => { this._startDrag(event, index) }}
                className={b(type)}
            >
            </div>
        );
    }
}

export default Figure;
