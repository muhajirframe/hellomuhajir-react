import React, {PropTypes} from "react"

import BasicPage from '../BasicPage'

import styles from './index.css'

const Homepage = (props) => {
  return (
    <BasicPage { ...props }>
      <div className={styles.container}>
        <h1 className={styles.heading}>{props.head.title}</h1>
        <h2 className={styles.subheading}>{props.head.tagline}</h2>
        <div>
          <button>Button One</button>
          <button>Button two</button>
        </div>
      </div>
    </BasicPage>
  )
}

Homepage.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Homepage
