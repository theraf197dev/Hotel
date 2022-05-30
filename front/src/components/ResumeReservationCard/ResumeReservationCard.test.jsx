import { render, screen } from '@testing-library/react';
import  ResumeReservationCard from './ResumeReservationCard';
import {BrowserRouter as Router} from 'react-router-dom';

test('it sholud return 3 boards', () => {
  const reservation = {
    "name": "Doble Vista Piscina",
    "checkin": "2022-05-22",
    "checkout": "2022-05-28",
    "board": {
      "id": 1,
      "price": 352,
      "name": "solo alojamiento"
    }
  }

  const reservationCard = render(<ResumeReservationCard name={reservation.name} checkin={reservation.checkin} checkout={reservation.checkout} board={reservation.board}/>);

  const name = reservationCard.getByTestId("name");
  const checkinOut = reservationCard.getByTestId("checkinOut");
  const boardName = reservationCard.getByTestId("boardName");
  const boardPrice = reservationCard.getByTestId("boardPrice");

  expect(name.nodeValue === "Doble Vista Piscina");
  expect(checkinOut.nodeValue === '2022-05-22 - 2022-05-28');
  expect(boardName.nodeValue === 'solo alojamiento');
  expect(boardPrice.nodeValue === 352);
});