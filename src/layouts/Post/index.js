import React, { PropTypes } from "react"

import LatestPosts from "../../components/LatestPosts"
import Loading from "../../components/Loading"
import BasicPage from "../BasicPage"
import {BodyContainer} from "phenomic"

import styles from "./index.css"

const Post = (props) => {
  // it's up to you to choose what to do with this layout ;)
  const pageDate = props.head.date ? new Date(props.head.date) : null

  return (
    <BasicPage { ...props } >
      <header className={ styles.header }>
      <h1 className={styles.title}>{props.head.title}</h1>
        {
          pageDate &&
          <time key={ pageDate.toISOString() }>
            { pageDate.toDateString() }
          </time>
        }
      </header>
        { props.head.hero &&
          <img src={props.head.hero} className={styles.hero} alt={props.head.title} />
        }
      <div className={styles.body}>
          {
            props.head.tags &&
            props.head.tags.map( tag => (
              <span className={styles.tag}>{tag.toUpperCase()}</span>
            ))
          }
          {
          props.isLoading
          ? <Loading />
          : <BodyContainer>{ props.body }</BodyContainer>
          }
      </div>
      <hr />
      <LatestPosts />
    </BasicPage>
  )
}

Post.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  isLoading: PropTypes.bool,
}

export default Post
