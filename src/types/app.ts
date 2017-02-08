interface IReduxState {
    tables: ITable[]
}

interface ITable {
    positionX: string;
    positionY: string;
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