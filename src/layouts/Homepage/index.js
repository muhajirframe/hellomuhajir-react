import React, {PropTypes} from "react"

import BasicPage from '../BasicPage'
import Button from '../../components/Button'
import CenterVertical from '../../components/CenterVertical'

import styles from './index.css'

const Homepage = (props) => {
  return (
    <BasicPage { ...props }>
      <CenterVertical>
        <h1 className={styles.heading}>{props.head.title}</h1>
        <h2 className={styles.subheading}>{props.head.tagline}</h2>
        <div>
          <Button key={'one'} className={styles.button}>Test</Button>
          <Button key={'two'} className={styles.button}>Test</Button>
        </div>
      </CenterVertical>
    </BasicPage>
  )
}

Homepage.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Homepage
