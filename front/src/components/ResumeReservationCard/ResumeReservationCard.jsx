import { NavLink } from "react-router-dom"

const ResumeReservationCard = ({name, checkin, checkout, board}) => {
  return (
    <div className="card mb-3 box-shadow-eff">
        <h5 className="card-header card-title">{name}</h5>
        <div className="card-body card-content grid-container">
            <p className="grid-item"><em>{checkin} - {checkout}</em></p>
            <p className="grid-item"><b>{board.name}</b></p>
            <p className="grid-item grid-price"><b>$ {board.price}</b></p>
        </div>
    </div>
  )
}

export default ResumeReservationCard