import React, {PropTypes} from "react"

import styles from "./index.css"

const Footer = (props, { metadata : { pkg } }) => {
  return (
    <footer className={ styles.footer }>
      <a href={`mailto:${ pkg.email }`}>{pkg.email}</a>
    </footer>
  )
}

Footer.contextTypes = {
  metadata : PropTypes.object.isRequired,
}

export default Footer
