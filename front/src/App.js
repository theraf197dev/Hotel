import './App.css';
import {useState, useEffect} from "react";
import CheckInOut from './components/CheckInOut/CheckInOut';
import ReservationList from './components/ReservationList/ReservationList';
import axios from 'axios';

function App() {
  const [filter, setFilter] = useState({})
  const [reservations, setReservations] = useState([])

  useEffect(() => {
    const url = 'http://localhost:3000/' + 'reservations';
    axios.get(url)
        .then(res => {
            const json = res.data;

            setReservations(json.rooms)
        });
  }, [filter])

  const childToParent = (from, to) =>{
    setFilter({});
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

export default App;
