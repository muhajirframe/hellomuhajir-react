import React, {PropTypes} from 'react';

const ContactForm = props => {
    return (
        <form>
            <fieldset>
                <input type={'text'} name={'name'} />
            </fieldset>
        </form>
    );
};

export default ContactForm;