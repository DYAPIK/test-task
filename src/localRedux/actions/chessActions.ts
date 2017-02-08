// import { IAction, IQueue, IReduxState, IColorTypes, ICell } from 'types/app';
// import { findPossibleSteps, findActiveCell, getFigureInstance } from 'helpers/logicHelpers';
// import * as Redux from 'redux'
// import { ThunkAction } from 'redux-thunk';
//
// interface IArgsChooseCellAction {
//     boardData: ICell[][];
//     queueGame: IQueue;
//     x: number;
//     y: number;
//     id: string;
// }
//
// interface IArgsMakeMoveAction {
//     activeCell: ICell;
//     boardData: ICell[][];
//     clickCellPosition: ICell;
//     attack: boolean;
//     typesFigures: IColorTypes;
// }
//
//
// function chooseCell(data: IArgsChooseCellAction): IAction {
//     const { x, y, id, queueGame, boardData } = data;
//     if (queueGame.white && id[0] === '1' || queueGame.black && id[0] === '2') {
//         const activeCell = findActiveCell(boardData);
//         const actionName = activeCell ? 'CHESS:CHANGE_ACTIVE_CELL': 'CHESS:CHOOSE_CELL';
//         return { type: actionName, payload: { x, y, id, activeCell } };
//     }
//     return { type: 'CHESS:EMPTY_STEP' };
// }
//
// function makeMove(data: IArgsMakeMoveAction): ThunkAction<void, IReduxState, void> {
//     return (dispatch: Redux.Dispatch<IReduxState>, getState: Function): IAction => {
//         const { activeCell, boardData, clickCellPosition, attack, typesFigures } = data;
//         const figure = getFigureInstance(typesFigures, activeCell);
//         if (figure) {
//             const possibleSteps = figure.getPossibleSteps(boardData);
//             if (findPossibleSteps(possibleSteps, clickCellPosition)) {
//                 dispatch({ type: 'CHESS:MAKE_MOVE', payload: { clickCellPosition, activeCell} });
//                 if (attack) {
//                     dispatch({ type: 'CHESS:ATTACK_FIGURE', payload: null });
//                 }
//                 return dispatch({ type: 'CHESS:CHANGE_QUEUE' })
//             }
//         }
//         return dispatch({ type: 'CHESS:EMPTY_STEP' });
//     }
// }
//
// export {
//     chooseCell,
//     makeMove,
// }