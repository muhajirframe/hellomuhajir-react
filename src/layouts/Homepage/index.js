import React, { PropTypes } from "react"

import BasicPage from '../BasicPage'
import Button from '../../components/Button'
import { Link } from 'phenomic'

import styles from './index.css'

const Homepage = (props) => {
  let Buttons = props.head.cta.map((item) => (
    <Link to={item.link} style={{'text-decoration':'none'}}>
      <Button key={item.label} className={styles.button}>{item.label}</Button>
    </Link>
  ))
  return (
    <BasicPage { ...props }>
      <h1 className={styles.heading}>{props.head.title}</h1>
      <h2 className={styles.subheading}>{props.head.tagline}</h2>
      <div>
        {Buttons}
      </div>
    </BasicPage>
  )
}

Homepage.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Homepage
