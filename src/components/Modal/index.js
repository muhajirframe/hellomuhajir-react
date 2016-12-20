import React, {PropTypes} from 'react';

import styles from './index.css'


const Modal = props => {
    const items = props.navItems.map( (item) => (
        <h3 key={item} className={styles.item}>{item}</h3>
    ))
    return (
        <div className={styles.modal}>
            {items}
        </div>
    );
};

Modal.propTypes = {
    navItems: PropTypes.array.isRequired,
}

export default Modal;