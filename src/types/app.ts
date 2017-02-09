interface IReduxState {
    tables: ITable[][]
    activeTable: number;
}

interface ITable {
    positionX?: number;
    positionY?: number;
    type: string;
}

interface IAction {
    payload?: { [key: string]: any } | number | string | null;
    type: string;
}

export {
    IReduxState,
    IAction,
    ITable,
}