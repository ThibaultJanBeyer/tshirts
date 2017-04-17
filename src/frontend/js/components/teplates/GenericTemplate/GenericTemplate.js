import React, { PropTypes } from "react"
import { Helmet } from "react-helmet"

const GenericTemplate = ({ title, header, hero, children, footer, ...props }) => {
  return (
    <div className="application">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {header}
      {hero}
      {children}
      {footer}
    </div>
  )
}

GenericTemplate.propTypes = {
  children: PropTypes.any.isRequired,
}

export default GenericTemplate;