import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import MeetingContext from './context/MeetingContext'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Register from './components/Register'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    name: '',
    description: 'Arts and Culture',
    isRegistered: false,
    isError: false,
  }

  setName = text => {
    this.setState({name: text})
  }

  setDescription = text => {
    this.setState({description: text})
  }

  setRegisterStatus = () => {
    this.setState({isRegistered: true})
  }

  setErrorStatus = () => {
    this.setState({isError: true})
  }

  render() {
    const {name, description, isRegistered, isError} = this.state
    return (
      <MeetingContext.Provider
        value={{
          name,
          description,
          isRegistered,
          isError,
          updateName: this.setName,
          updateDescription: this.setDescription,
          updateError: this.setErrorStatus,
          updateRegister: this.setRegisterStatus,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <NotFound />
        </Switch>
      </MeetingContext.Provider>
    )
  }
}

export default App
