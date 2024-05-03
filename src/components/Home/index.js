import {Link} from 'react-router-dom'
import Headers from '../Headers'
import MeetingContext from '../../context/MeetingContext'
import './index.css'

const Home = () => (
  <MeetingContext.Consumer>
    {value => {
      const {name, description, isRegistered} = value

      const notRegistered = () => (
        <>
          <h1 className="meeting-heading">Welcome to Meetup</h1>
          <p className="meeting-description">Please register for the topic</p>
          <Link to="/register">
            <button className="register-btn" type="button">
              Register
            </button>
          </Link>
        </>
      )

      const registered = () => (
        <>
          <h1 className="register-name">Hello {name}</h1>
          <p className="register-desc">Welcome to {description}</p>
        </>
      )

      return (
        <>
          <Headers />
          <div className="meeting-container">
            {isRegistered ? registered() : notRegistered()}
            <img
              className="meeting-img"
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </div>
        </>
      )
    }}
  </MeetingContext.Consumer>
)

export default Home
