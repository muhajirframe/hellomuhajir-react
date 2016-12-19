import React, {PropTypes} from "react"

import styles from "./index.css"

const Footer = (props, { metadata : { pkg } }) => (
  <footer className={ styles.footer }>
    <a>{pkg.email}</a>
  </footer>
)

Footer.contextTypes = {
  metadata : PropTypes.object.isRequired,
}

export default Footer
