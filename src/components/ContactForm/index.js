import React from 'react';
import styles from './index.css'

const ContactForm = () => {
    return (
        <form action="https://formspree.io/muhajir@hellomuhajir.com" method="POST">
            <fieldset className={styles.fieldset}>
                <input type={'text'} name={'name'} className={styles.input} 
                placeholder={'Your Name'}/>
                <input type={'email'} name={'_replyto'} className={styles.input} 
                placeholder={'Your Email'}/>
                <textarea placeholder={'Leave message here'} className={styles.textarea}/>
                <input type="submit" value="Send" className={styles.submit}/>
            </fieldset>
        </form>
    );
};

export default ContactForm;