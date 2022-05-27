import {useState, useEffect} from 'react'
import axios from 'axios'
import CheckInOut from '../components/CheckInOut/CheckInOut'
import ReservationList from '../components/ReservationList/ReservationList'

const MainPage = () => {
    const [filter, setFilter] = useState({})
    const [reservations, setReservations] = useState([])
  
    useEffect(() => {
      let url = 'http://localhost:3000/' + 'reservations';
      
      console.log(filter)
      if(filter.from !== undefined && filter.to !== undefined){
        url += '?checkin=' + filter.from + "&checkout=" + filter.to;
      }

      axios.get(url)
          .then(res => {
              setReservations(res.data)
          })
          .catch(err => console.log(err))
    }, [filter])
  
    const childToParent = (from, to) =>{
      if(from.toString().includes('NaN')|| to.toString().includes('NaN'))
        return
      
      setFilter({
        'from': from,
        'to': to
      })
    }
    return (
      <>
        <CheckInOut childToParent={childToParent} />
        <ReservationList reservations={reservations} />
      </>
    )
}

export default MainPage