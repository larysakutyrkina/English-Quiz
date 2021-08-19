import React, {Component} from 'react';
import styles from './Drawer.module.scss';
import Backdrop from "../../UI/Backdrop/Backdrop";

const links = [
    1, 2, 3
]

class Drawer extends Component {
    renderLinks () {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <a>Link {link}</a>
                </li>
            )
        })
    }
    render() {
        const classes = [styles.drawer]
        if (!this.props.isOpen) {
            classes.push(styles.close)
        }
        return (
            <React.Fragment>
                <nav className={classes.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
            </React.Fragment>
        );
    }
}

export default Drawer;