import { render, screen } from '@testing-library/react';
import  ReservationCard from './ReservationCard';
import {BrowserRouter as Router} from 'react-router-dom';

test('it sholud return 3 boards', () => {
  const reservation = {
    "title": "Doble Vista Piscina",
    "boards": [
        {
        "id": 1,
        "price": 352,
        "name": "solo alojamiento"
        },
        {
        "id": 2,
        "price": 563,
        "name": "habitación y desayuno"
        },
        {
        "id": 3,
        "price": 655,
        "name": "todo incluido"
        }
    ]
  }

  const reservationCard = render(<Router><ReservationCard title={reservation.title} boards={reservation.boards}/></Router>);

  const title = reservationCard.getByTestId("title");
  const boardsCmp = reservationCard.getByTestId("boards");

  expect(title.nodeValue === "Doble Vista Piscina");
  expect(boardsCmp.childElementCount === 3);
});