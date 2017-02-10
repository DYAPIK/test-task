import * as Redux from 'redux'
import { IAction } from 'types/app';

interface IArgsSetFigurePosition {
    positionX: number;
    positionY: number;
    activeTable: number;
    activeItem: number | null;
    type: string;
}

function chooseActiveTab(activeTabIndex: number): IAction {
    return { type: 'CHOOSE_ACTIVE_TAB', payload: activeTabIndex }
}

function setFigurePosition(data: IArgsSetFigurePosition): IAction {
    return { type: 'SET_FIGURE_POSITION', payload: data }
}

function createFigurePosition(data: IArgsSetFigurePosition): IAction {
    return { type: 'CREATE_FIGURE_POSITION', payload: data }
}

export {
    chooseActiveTab,
    setFigurePosition,
    createFigurePosition,
}
