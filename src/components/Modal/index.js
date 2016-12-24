import React, {PropTypes} from 'react';
import { Link } from 'phenomic'

import styles from './index.css'


const Modal = props => {
    const items = props.navItems.map( (item) => (
        <Link to={'/'+item} onClick={props.handleMenuClick}>
            <h3 key={item} className={styles.item}>{item.toUpperCase()}</h3>
        </Link>
    ))
    return (
        <div className={styles.modal}>
            {items}
        </div>
    );
};

Modal.propTypes = {
    navItems: PropTypes.array.isRequired,
    handleMenuClick: PropTypes.func,    
}

export default Modal;