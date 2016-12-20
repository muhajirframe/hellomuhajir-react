import React, {PropTypes, Component} from 'react';

import { Link } from "phenomic"
import Modal from '../Modal'
import styles from './index.css'


class Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.handleMenuClick = this.handleMenuClick.bind(this)
    }

    handleMenuClick() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    
    render() {
        const navigations = this.props.navItems.map( item => (
            <a href='#' key={item} className={styles.link}>{item}</a>
        ))
        return (
            <header className={styles.header}>
                <nav className={styles.homenav}>
                    <Link to={ "/" }>
                        HOME
                    </Link>
                    <div style={styles.anothernav}>
                        {navigations}
                    </div>
                    <Link to='/' className={styles.menuIcon}>
                        <button onClick={this.handleMenuClick}>ICON</button>
                    </Link>
                </nav>
                { this.state.isModalOpen &&
                <Modal navItems={this.props.navItems} /> }
            </header>
        );
    }
}

Bar.propTypes = {
    navItems: PropTypes.array.isRequired,
};

export default Bar;