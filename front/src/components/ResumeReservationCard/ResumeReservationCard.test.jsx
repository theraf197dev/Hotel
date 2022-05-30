import { render, screen } from '@testing-library/react';
import  ResumeReservationCard from './ResumeReservationCard';

test('it sholud return 3 boards', () => {
  const reservation = {
    "title": "Doble Vista Piscina",
    "checkin": "2022-05-22",
    "checkout": "2022-05-28",
    "board": {
      "id": 1,
      "price": 352,
      "name": "solo alojamiento"
    }
  }

  render(<ResumeReservationCard name={reservation.title} checkin={reservation.checkin} checkout={reservation.checkout} board={reservation.board}/>);

  const title = screen.getByTestId("title");
  const checkinOut = screen.getByTestId("checkinOut");
  const boardName = screen.getByTestId("boardName");
  const boardPrice = screen.getByTestId("boardPrice");

  expect(title).toHaveTextContent('Doble Vista Piscina');
  expect(checkinOut).toHaveTextContent('2022/05/22 - 2022/05/28');
  expect(boardName).toHaveTextContent('solo alojamiento');
  expect(boardPrice).toHaveTextContent(352);
});