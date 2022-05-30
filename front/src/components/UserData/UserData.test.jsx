import { render, screen } from '@testing-library/react';
import UserData from './UserData';

test('load countries into combobox', () => {
    const userData = render(<UserData handleFormSubmit={null} price={500}/>);

    const country = userData.getByTestId("country");

    expect(country.childElementCount > 99);
});