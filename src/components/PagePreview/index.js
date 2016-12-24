import React, { PropTypes } from "react"
import { Link } from "phenomic"

import Button from "../../components/Button"

import styles from "./index.css"
import img from "../../../content/assets/react.svg"

const PagePreview = ({ __url, title, date, description, withHero, hero }) => {
  const pageDate = date ? new Date(date) : null

  return (
    <div className={ styles.wrapper }>
      <Link to={ __url }>
        { withHero && hero && 
        <div className={styles.hero}>
          <img src={hero} className={ styles.hero }/>
        </div> }
        <div className={styles.title}>
          { title }
        </div>
      </Link>
      <div className={ styles.meta }>
        {
          pageDate &&
            <time key={ pageDate.toISOString() }>
              { pageDate.toDateString() }
            </time>
        }
      </div>
      <div className={ styles.description }>
        { description }
        { " " }
      </div>
      <Link to={ __url } className={ styles.readMore }>
        <Button secondary>{ "Read More →" }</Button>
      </Link>
    </div>
  )
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
  withHero: PropTypes.bool,
  hero: PropTypes.string,
}

export default PagePreview
