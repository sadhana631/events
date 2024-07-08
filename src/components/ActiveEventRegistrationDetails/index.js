import './index.css'

const registrationsStatus = {
  YetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const renderNoActiveEventView = () => {
    <p className="no-active-event-description">
     Click on an event, to view its registrations details
    </p>
  }

  const renderRegistrationsClosedView = () => (
    <div className="view-container">
     <img
       src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
       alt="registrations closed"
       className="registrations-closed-image"
     />
     <h1 className="registrations-closed-heading">
      Registrations Are Close Now!
     </h1>  
     <p className="registrations-closed-description">
      stay tuned.We will reopen the registrations soon!
     </p>
    </div>  
  )  

  const renderRegisteredView = () => (
    <div className="view-container">
     <img
      src="https://assets.ccbp.in/frontend/react-js/events-registered-img.png"
      alt="registered"
      className="registered-img"
    />
    <h1 className="registered-heading">
      You have already registered for the event
    </h1>   
    </div>
  )

  const renderYetToRegisterView = () => (
    <div className="view-container">
     <img
      src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
      alt="yet to register"
      className="yet-to-register-image"
     />
     <p className="registerdescription">
      A live performance
     </p>  
     <button type="button" className="register-here-button">
      Register Here
     </button>
    </div>  
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registrationsStatus.YetToRegister:
       return renderYetToRegisterView()
      case registrationsStatus.registered:
       return renderRegisteredView()
      case registrationsStatus.registrationsClosed:
       return renderRegistrationsClosedView()
      default:
       return renderNoActiveEventView()   
    }  
  }

  return (
    <div className="registration-status-container">
     {renderActiveEventRegistrationDetails()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
