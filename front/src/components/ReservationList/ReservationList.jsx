import ReservationCard from '../ReservationCard/ReservationCard';

const ReservationList = ({reservations}) => {
    return (
       <>
        {(reservations.length <= 0) ? <div data-testid="no-reservations">No reservations</div>
        :
        <div className='no-border go-center spacing' data-testid="reservations">
            {reservations.map((reservation, i) => <ReservationCard key={i} title={reservation.name} boards={reservation.boards} />)}
        </div>
        }
       </>
    )
}

export default ReservationList