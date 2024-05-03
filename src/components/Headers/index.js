import {Link} from 'react-router-dom'
import './index.css'

const Headers = () => (
  <nav>
    <Link to="/">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </nav>
)

export default Headers
