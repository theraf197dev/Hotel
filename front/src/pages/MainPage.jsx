import {useState, useEffect} from 'react'
import axios from 'axios'
import CheckInOut from '../components/CheckInOut/CheckInOut'
import ReservationList from '../components/ReservationList/ReservationList'
import {URL} from '../constants'

const MainPage = () => {
    const [filter, setFilter] = useState({})
    const [reservations, setReservations] = useState([])

    console.log(reservations)
    console.log(filter)
  
    useEffect(() => {
      let url = URL + '/reservations';
      
      if(filter.from !== undefined && filter.to !== undefined){
        url += '?checkin=' + filter.from + "&checkout=" + filter.to;
      }
      else
        return

      axios.get(url)
          .then(res => {
              setReservations(res.data)
          })
          .catch(err => console.log(err))
    }, [filter])
  
    const childToParent = (from, to) =>{
      if(from.toString().includes('NaN')|| to.toString().includes('NaN') || from === to)
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