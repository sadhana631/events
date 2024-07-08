import './index.css'

const EventsItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {imgUrl, name, location, id} = eventDetails 
  const eventImageClassName = isActive ? 'event-image active' = 'event-image'

  const onClickEvent = () => {
    setActiveEventId(id)
  } 

  return (
    <li className="event-item">
     <button type="button" className="event-button" onClick={onClickEvent}>
      <img src={imgUrl} alt="event" className={eventImageClassName} />
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </button>
    </li>
  )
}

export default EventsItem

