import React, {PropTypes} from 'react';
import BasicPage from '../BasicPage'
import Loading from '../../components/Loading'
import {BodyContainer} from 'phenomic'

import styles from './index.css'

const About = props => {
    const body = props.body
    return (
        <BasicPage {...props}>
            <img src={props.head.hero} alt={props.head.title}
            className={styles.profilePicture}/>
            <p className={styles.intro}>{props.head.greet}<br />{props.head.description}</p>
            <div className={styles.body}>
                {
                props.isLoading
                ? <Loading />
                : <BodyContainer>{ body }</BodyContainer>
                }
            </div>
        </BasicPage>
    );
};

About.propTypes = {
    head: PropTypes.object.isRequired,
    isLoading: PropTypes.bool,
    body: PropTypes.string,
};

export default About;