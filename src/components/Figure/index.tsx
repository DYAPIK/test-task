import * as React from 'react';
import * as block from 'bem-cn';
import './style.styl';
import actions from 'localRedux/actions';

interface IState {
    draggable: boolean;
    dragExistFigure: boolean;
    positionX: number | null;
    positionY: number | null;
    initialPositionX: number | null;
    initialPositionY: number | null;
}

interface IOwnProps {
    type: string;
    activeTable: number;
    initial: boolean;
    index: number;
    offsetWidth: number | null;
    offsetHeight: number | null;
    top?: number;
    left?: number;
}

interface IDispatchProps {
    setFigurePosition: typeof actions.setFigurePosition;
    createFigurePosition: typeof actions.createFigurePosition;
}

type Props = IOwnProps & IDispatchProps;

class Figure extends React.Component<Props, IState> {

    private b = block('figure');
    private draggableFigureRef: HTMLDivElement;

    constructor(props: Props) {
        super(props);
        this._startDrag  = this._startDrag.bind(this);
        this._endDrag    = this._endDrag.bind(this);
        this._mouseMove  = this._mouseMove.bind(this);
        this._onRef      = this._onRef.bind(this);
        this._checkEntryInField      = this._checkEntryInField.bind(this);
        this.state = {
            draggable: false,
            positionX: null,
            positionY: null,
            initialPositionX: null,
            initialPositionY: null,
            dragExistFigure: false,
        }
    }

    private _startDrag(event: React.MouseEvent<HTMLDivElement>, index: number): void {
        document.addEventListener('mousemove', this._mouseMove);
        document.addEventListener('mouseup', this._endDrag);
        const { offsetHeight, offsetWidth, initial } = this.props;
        this.setState({
            draggable: true,
            positionY: event.pageY - this.draggableFigureRef.offsetHeight  / 2 - offsetHeight,
            positionX: event.pageX - this.draggableFigureRef.offsetWidth / 2 - offsetWidth,
            initialPositionX: event.pageX - this.draggableFigureRef.offsetWidth / 2,
            initialPositionY: event.pageY - this.draggableFigureRef.offsetHeight / 2,
            dragExistFigure: !initial,
        });
    }

    private _mouseMove(event: MouseEvent): void {
        const { initial, offsetWidth, offsetHeight } = this.props;
        let positionX, positionY;
        if (initial) {
            positionX = event.pageX - this.draggableFigureRef.offsetWidth / 2;
            positionY = event.pageY - this.draggableFigureRef.offsetHeight / 2;
        } else {
            positionX = event.pageX - this.draggableFigureRef.offsetWidth / 2 - offsetWidth;
            positionY = event.pageY - this.draggableFigureRef.offsetHeight / 2 - offsetHeight;
        }
        this.setState({
            ...this.state,
            draggable: true,
            positionX: positionX,
            positionY: positionY,
        })

    }

    private _onRef(ref: HTMLDivElement): void {
        if (ref) {
            this.draggableFigureRef = ref;
            ref.addEventListener('dragstart', () => { return false; })
        }
    }

    private _endDrag(event: MouseEvent): void {
        const {
            setFigurePosition,
            createFigurePosition,
            activeTable,
            type,
            offsetHeight,
            offsetWidth,
            index,
            initial
        } = this.props;
        document.removeEventListener('mousemove', this._mouseMove );
        document.removeEventListener('mouseup', this._endDrag );
        if (this._checkEntryInField(event.pageX, event.pageY)) {
            const positionX = event.pageX - this.draggableFigureRef.offsetWidth / 2 - offsetWidth;
            const positionY = event.pageY - this.draggableFigureRef.offsetHeight / 2 - offsetHeight;
            const setPositionArgs = { positionX, positionY, activeTable, type, activeItem: index };
            const createPositionArgs = { positionX, positionY, activeTable, type };
            initial ? createFigurePosition(createPositionArgs) : setFigurePosition(setPositionArgs);
            this.setState({
                ...this.state,
                draggable: false,
                positionX: null,
                positionY: null,
                dragExistFigure: false,
            });
        } else {
            this.setState({
                ...this.state,
                draggable: false,
                positionX: this.state.initialPositionX,
                positionY: this.state.initialPositionY,
                dragExistFigure: false,
            });
        }
    }

    private _checkEntryInField(positionX: number, positionY: number): boolean {
        const { offsetHeight, offsetWidth } = this.props;
        return positionX > offsetWidth && positionY > offsetHeight
    }

    render () {
        const b = this.b;
        const { type, index, top, left } = this.props;
        const { dragExistFigure, draggable, positionY, positionX } = this.state;
        return (
            <div>
                {!dragExistFigure ?
                    (
                        <div
                            style={{ top: top, left: left }}
                            ref={this._onRef}
                            onMouseDown={(event) => { this._startDrag(event, index) }}
                            className={b(type)}
                        >
                        </div>
                    )
                    : null
                }
                {draggable ?
                    (
                        <div
                            style={{ top: positionY, left: positionX }}
                            ref={this._onRef}
                            onMouseDown={(event) => { this._startDrag(event, index) }}
                            className={b(type)}
                        >
                        </div>
                    )
                    : null
                }
            </div>
        );
    }
}

export default Figure;
