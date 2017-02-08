import * as React from 'react';
import * as block from 'bem-cn';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


class TableMenu extends React.Component<{}, {}> {

    private b = block('table-menu');

    render () {
        const b = this.b;
        return (
            <div className={b('table-menu')}>
                <Navbar inverse collapseOnSelect>
                    <Nav>
                        <NavItem eventKey={1} href="#">Доска 1</NavItem>
                        <NavItem eventKey={2} href="#">Доска 2</NavItem>
                        <NavItem eventKey={3} href="#">Доска 3</NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default TableMenu;
