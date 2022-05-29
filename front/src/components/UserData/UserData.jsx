import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { URL } from '../../constants';

const UserData = ({price, handleFormSubmit}) => {
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    const url = URL + '/countries?_sort=name_es';
    axios.get(url)
      .then(res =>{
        setPaises(res.data);
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <form className="needs-validation go-center" noValidate onSubmit={handleFormSubmit}>
        <div className="form-floating mb-3">
          <input name='username' type="text" className="form-control" id="floatingUsername" placeholder="Juan" required/>
          <label htmlFor="floatingUsername">Nombre</label>
        </div>
        <div className="form-floating mb-3">
          <input name='lastname' type="text" className="form-control" id="floatingLastName" placeholder="Pere" required/>
          <label htmlFor="floatingLastname">Apellido</label>
        </div>
        <div className="form-floating mb-3">
          <input name='email' type="email" className="form-control" id="floatingEmail" placeholder="email@email.com" required/>
          <label htmlFor="floatingEmail">Email</label>
        </div>
        <div className="form-floating mb-4">
          <select name='country' className="form-select" id="floatingCountry" aria-label="Pais">
            {paises.map((item, i) => {
              return <option key={i} value={item.name_es} selected={item.code === 'ES'}>{item.name_es}</option>
            })}
          </select>
          <label htmlFor="floatingCountry">País</label>
        </div>
        <div className="form-check mb-4 go-left">
          <input name='agreement' className="form-check-input" type="checkbox" id="invalidCheck" required/>
          <label className="form-check-label" htmlFor="invalidCheck">
            Acepto términos y condiciones
          </label>
          <div className="invalid-feedback">
            Debe aceptar los términos y condiciones
          </div>
        </div>
        <div className='go-right mb-4 '>
          <p>TOTAL <b>$ {price}</b></p>
        </div>
        <button className="btn custom-button big-button" type="submit">Reservar</button>
      </form>
    </>
  )
}

export default UserData
