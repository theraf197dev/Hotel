import { render, screen } from '@testing-library/react';
import  ReservationList from './ReservationList';
import {BrowserRouter as Router} from 'react-router-dom';

describe('<ReservationList />', () => {
  const reservations = [
    {
        "checkin": "2022-05-22",
        "checkout": "2022-05-28",
        "name": "Doble Vista Piscina",
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
    },
    {
        "checkin": "2022-05-22",
        "checkout": "2022-05-28",
        "name": "Doble Vista Mar",
        "boards": [
          {
            "id": 4,
            "price": 366,
            "name": "solo alojamiento"
          },
          {
            "id": 5,
            "price": 580,
            "name": "habitación y desayuno"
          },
          {
            "id": 6,
            "price": 675,
            "name": "todo incluído"
          }
        ]
    },
  ]
  test('it sholud return 2 reservations', () => {
    render(<Router><ReservationList reservations={reservations}/></Router>);

    const reservationsCmp = screen.getByTestId("reservations");

    expect(reservationsCmp.childElementCount === 2).toBeTruthy();
  });

  test('it sholud return no reservations', () => {
    render(<Router><ReservationList reservations={[]}/></Router>);

    const reservationsCmp = screen.getByTestId("no-reservations");

    expect(reservationsCmp).toHaveTextContent('No reservations');
  });
});