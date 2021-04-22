import * as React from "react"
import { Link } from "gatsby"


// markup
const NotFoundPage = () => {
  return (
    <section>
      <h1>página no encontrada. (error 404 <span aria-label='emoji' role="img">😵</span>)</h1>
      <Link to='/'>Regresar a inicio</Link>
    </section>
  )
}

export default NotFoundPage
