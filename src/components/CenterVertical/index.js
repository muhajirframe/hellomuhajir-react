import React, {PropTypes} from 'react';
import styles from './index.css'

const CenterVertical = props => {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    );
};

CenterVertical.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CenterVertical;