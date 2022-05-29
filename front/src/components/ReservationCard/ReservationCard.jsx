import { NavLink } from "react-router-dom"

const ReservationCard = ({id, title, boards}) => {
  return (
    <div className="card mb-5 custom-card box-shadow-eff">
        <h5 className="card-header card-title">{title}</h5>
        <div className="card-body">
            {boards.map(((board, i) => 
                <div className={i === (boards.length - 1) ? "row confirm-div" : "row confirm-div bottom-line"} key={i}>
                    <div className="col col-middle go-left">
                        <p>{board.name}</p>
                    </div>
                    <div className="col col-middle go-center">
                        <p>$ {board.price}</p>
                    </div>
                    <div className="col col-middle go-right">
                        <NavLink className="btn custom-button" to={`/reservations/${board.id}`} state={board.id}>RESERVAR</NavLink>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default ReservationCard