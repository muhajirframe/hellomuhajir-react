import React, {PropTypes} from 'react';
import BasicPage from '../BasicPage'
import CenterVertical from '../../components/CenterVertical'
import Loading from '../../components/Loading'
import {BodyContainer} from 'phenomic'

import styles from './index.css'

const About = props => {
    const isLoading = props.isLoading
    const body = props.body
    return (
        <BasicPage {...props}>
            <CenterVertical>
                <img src={props.head.hero} alt={props.head.title}
                className={styles.profilePicture}/>
                <p className={styles.intro}>{props.head.greet}<br />{props.head.description}</p>
                <div className={styles.body}>
                    {
                    isLoading
                    ? <Loading />
                    : <BodyContainer>{ body }</BodyContainer>
                    }
                </div>
            </CenterVertical>
        </BasicPage>
    );
};

About.propTypes = {
    head: PropTypes.object.isRequired,
    isLoading: PropTypes.bool,
    body: PropTypes.string,
};

export default About;