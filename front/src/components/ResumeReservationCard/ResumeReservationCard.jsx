const ResumeReservationCard = ({name, checkin, checkout, board}) => {
  return (
    <div className="card mb-3 box-shadow-eff">
        <h5 className="card-header card-title" data-testid="title">{name}</h5>
        <div className="card-body card-content grid-container">
            <p className="grid-item" data-testid="checkinOut"><em>{checkin.replaceAll('-', '/')} - {checkout.replaceAll('-', '/')}</em></p>
            <p className="grid-item" data-testid="boardName"><b>{board.name}</b></p>
            <p className="grid-item grid-price" data-testid="boardPrice"><b>$ {board.price}</b></p>
        </div>
    </div>
  )
}

export default ResumeReservationCard