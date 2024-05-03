import Headers from '../Headers'
import MeetingContext from '../../context/MeetingContext'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <MeetingContext.Consumer>
    {value => {
      const {
        name,
        description,
        updateName,
        updateDescription,
        updateRegister,
        updateError,
        isError,
      } = value

      const onRegister = e => {
        e.preventDefault()
        if (name !== '' && description !== '') {
          const {history} = props
          history.replace('/')
          updateRegister()
        } else {
          updateError()
        }
      }

      return (
        <>
          <Headers />
          <div className="register-container">
            <img
              className="register-img"
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <form onSubmit={onRegister}>
              <h1>Let us join</h1>
              <div className="input-container">
                <label htmlFor="name">NAME</label>
                <input
                  onChange={e => updateName(e.target.value)}
                  placeholder="Your name"
                  type="text"
                  id="name"
                  value={name}
                />
              </div>
              <div className="input-container">
                <label htmlFor="desc">TOPICS</label>
                <select
                  value={description}
                  onChange={e => updateDescription(e.target.value)}
                  id="desc"
                >
                  {topicsList.map(eachTopic => (
                    <option value={eachTopic.id} key={eachTopic.id}>
                      {eachTopic.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button className="btn" type="submit">
                Register Now
              </button>
              {isError && <p className="error">Please enter your name</p>}
            </form>
          </div>
        </>
      )
    }}
  </MeetingContext.Consumer>
)

export default Register
