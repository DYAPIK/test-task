import * as React from 'react';
import * as block from 'bem-cn';
import { Tabs, Tab } from 'material-ui/Tabs';
import './style.styl';


class TableMenu extends React.Component<{}, {}> {

    private b = block('table-menu');

    render () {
        const b = this.b;
        return (
            <div className={b()}>
                <Tabs>
                    <Tab label="Доска 1">
                        First
                    </Tab>
                    <Tab label="Доска 2">
                        Second
                    </Tab>
                    <Tab label="Доска 3">
                        Third
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default TableMenu;
