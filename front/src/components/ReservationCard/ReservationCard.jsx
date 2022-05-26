const ReservationCard = ({title, boards}) => {
  return (
    <div className="card mb-3 custom-card">
        <h5 className="card-header card-title">{title}</h5>
        <div className="card-body card-content">
            {boards.map(((board, i) => 
                <div className="row" key={i}>
                    <div className="col">
                        <p>{board.name}</p>
                    </div>
                    <div className="col go-center">
                        $ {board.price}
                    </div>
                    <div className="col go-rigth">
                        <button className="custom-button">RESERVAR</button>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default ReservationCard