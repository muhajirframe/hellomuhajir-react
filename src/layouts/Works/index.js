import React, {PropTypes} from 'react';
import BasicPage from '../BasicPage'
import LatestPost from '../../components/LatestPosts'

const Works = props => {
    return (
        <BasicPage {...props}>
            <LatestPost tag="works" title="Works" withHero/>
        </BasicPage>
    );
};

Works.propTypes = {
    head: PropTypes.object.isRequired,
};

export default Works;