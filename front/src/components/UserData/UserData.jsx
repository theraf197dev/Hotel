import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';

const UserData = ({price}) => {
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:3000/' + 'countries';
    axios.get(url)
      .then(res =>{
        setPaises(res.data);
      })
      .catch(err => console.log(err))
  }, [])
  

  return (
    <>
      <form className="row g-3 needs-validation" noValidate>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingName" placeholder="Juan" required/>
          <label htmlFor="floatingInput">Nombre</label>
        </div>
        <div className="form-floating">
          <input type="text" className="form-control" id="floatingLasName" placeholder="Pere" required/>
          <label htmlFor="floatingPassword">Apellido</label>
        </div>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingEmail" placeholder="email@email.com" required/>
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating">
          <select className="form-select" id="floatingSelect" aria-label="Pais">
            {paises.map((item, i) => {
              <option key={i} value={item.code}>{item.name_es}</option>
            })}
          </select>
          <label htmlFor="floatingSelect">País</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
          <label className="form-check-label" htmlFor="invalidCheck">
            Acepto términos y condiciones
          </label>
          <div className="invalid-feedback">
            Debe aceptar los términos y condiciones
          </div>
        </div>
        <p>{price} $</p>
        <button className="btn custom-button" type="submit">Reservar</button>
      </form>
    </>
  )
}

export default UserData
