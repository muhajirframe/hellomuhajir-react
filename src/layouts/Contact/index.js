import React, {PropTypes} from 'react';
import BasicPage from '../BasicPage'
import ContactForm from '../../components/ContactForm'
import styles from './index.css'

const Contact = props => {
    return (
        <BasicPage {...props}>
            <h1 className={styles.title}>{props.head.title}</h1>
            <p>{props.head.description}</p>
            <ContactForm />
        </BasicPage>
    );
};

Contact.propTypes = {
  head: PropTypes.object.isRequired,
};

export default Contact;