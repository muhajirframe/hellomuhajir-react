import React from 'react';
import styles from './index.css'

const ContactForm = () => {
    return (
        <form>
            <fieldset className={styles.fieldset}>
                <input type={'text'} name={'name'} className={styles.input} 
                placeholder={'Your Name'}/>
                <input type={'email'} name={'email'} className={styles.input} 
                placeholder={'Your Email'}/>
                <textarea placeholder={'Leave message here'} className={styles.textarea}/>
            </fieldset>
        </form>
    );
};

export default ContactForm;