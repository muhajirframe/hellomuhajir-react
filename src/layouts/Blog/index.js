import React, {PropTypes} from 'react';
import BasicPage from '../BasicPage'
import LatestPost from '../../components/LatestPosts'

const Blog = props => {
    return (
        <BasicPage {...props}>
            <LatestPost title={props.head.title} /> 
        </BasicPage>
    );
};

Blog.propTypes = {
    head: PropTypes.object.isRequired,
};

export default Blog;