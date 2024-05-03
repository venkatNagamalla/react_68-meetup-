import React from 'react'

const MeetingContext = React.createContext({
  isRegistered: false,
  updateRegister: () => {},
  name: '',
  updateName: () => {},
  description: 'Arts and Culture',
  updateDescription: () => {},
  isError: false,
  updateError: () => {},
})

export default MeetingContext
