import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ConfirmationPage = () => {
  const {state} = useLocation();
  const navigate = useNavigate();

  const {checkin, checkout, code, name, username, lastname, email, country, board} = state

  const handleConfirm = () => {
    navigate('reservations');
  }

  return (
    <div className='go-center'>
      <div className='confirm-container'>
      <div className='confirm-div bottom-line'>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-check-circle-fill grey-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </svg>
        <br/><br/>
        <p>Reserva {code}</p>
      </div>
      <div className='confirm-div bottom-line go-left'>
        <p className='mb-2'><b>{name}</b></p>
        <p className='mb-2'><em>{checkin.replaceAll('-', '/')} - {checkout.replaceAll('-', '/')}</em></p>
        <p>{board.name}</p>
      </div>
      <div className='confirm-div bottom-line go-right'>
        <p><b>TOTAL: $ {board.price}</b></p>
      </div>
      <div className='confirm-div bottom-line go-left'>
        <p className='mb-2'><b>{username} {lastname}</b></p>
        <p className='mb-2'>{email}</p>
        <p>{country}</p>
      </div>
    </div>
    <br /><br />
    <button className="btn custom-button big-button" onClick={handleConfirm}>Aceptar</button>
    </div>
  )
}

export default ConfirmationPage