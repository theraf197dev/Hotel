import React from 'react'
import UserData from '../components/UserData/UserData'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import Modal from '../components/Modal/Modal'
import ResumeReservationCard from '../components/ResumeReservationCard/ResumeReservationCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { URL } from '../constants'

const ReservationDetail = () => {
  const [checkin, setCheckin] = useState('')
  const [checkout, setCheckout] = useState('')
  const [board, setBoard] = useState({})
  const [title, setTitle] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [msg, setMsg] = useState('')
  const [modalTitle, setModalTitle] = useState('')

  const location = useLocation()
  let navigate = useNavigate()

  useEffect(() => {
    const url = URL + '/reservations';

    axios.get(url)
      .then(res =>{
        const data = res.data;
        for(let i = 0; i < data.length; i++){
          let _board = data[i].boards.filter(b => b.id === location.state);
          if(_board.length > 0){
            setCheckin(data[i].checkin);
            setCheckout(data[i].checkout);
            setTitle(data[i].name);
            setBoard(_board[0]);

            continue;
          }
        }
      })
      .catch(err => console.log(err))
  }, [])

  const closeModal = () => {
    setMsg('');
    setShowModal(false);
  }

  const validateData = (username, lastname, email, country, agreement) => {
    if(username === ''){
      setModalTitle('Faltan campos por rellenar');
      setMsg('El nombre esta vacio');
      setShowModal(true);

      return false;
    }

    else if(lastname === ''){
      setModalTitle('Faltan campos por rellenar');
      setMsg('El apellido esta vacio');
      setShowModal(true);

      return false;
    }

    else if(email === ''){
      setModalTitle('Faltan campos por rellenar');
      setMsg('El email esta vacio');
      setShowModal(true);

      return false;
    }

    else if(!email.includes('@')){
      setModalTitle('Email incorrecto');
      setMsg('No hay un @ en el email');
      setShowModal(true);

      return false;
    }

    else if(country === ''){
      setModalTitle('Faltan campos por rellenar');
      setMsg('El país esta vacio');
      setShowModal(true);

      return false;
    }

    else if(!agreement){
      setModalTitle('Se deben aceptar las condiciones');
      setMsg('Acepte los términos y condiciones');
      setShowModal(true);

      return false;
    }

    return true;
  }

  const handleFormSubmit = (event) =>{
    event.preventDefault();
    const username = event.target.username.value;
    const lastname = event.target.lastname.value;
    const email = event.target.email.value;
    const country = event.target.country.value;
    const agreement = event.target.agreement.checked;

    if(!validateData(username, lastname, email, country, agreement))
      return

    const url = URL + '/booked';

    let charCode = String.fromCharCode(Math.floor(Math.random() * (91 - 65) ) + 65)
    let code = charCode + (Math.floor(Math.random() * 1000000))

    const data = {
      "checkin": checkin,
      "checkout": checkout,
      "username": username,
      "lastname": lastname,
      "email": email,
      "country": country,
      "name": title,
      "board": board,
      "code": code
    }

    axios.post(url, data)
      .then(res =>{
        const data = res.data;

        navigate(`/reservations/${location.state}/booked/${data.id}`, {state: data})
      })
      .catch(err => console.log(err))
  }
  
  return (
    <div className='spacing'>
      {showModal}
      {showModal ? <Modal closeModal={closeModal} title={modalTitle} msg={msg}/> : null}
      <ResumeReservationCard name={title} checkin={checkin} checkout={checkout} board={board}/>
      <UserData handleFormSubmit={handleFormSubmit} price={board.price}/>
    </div>
  )
}

export default ReservationDetail