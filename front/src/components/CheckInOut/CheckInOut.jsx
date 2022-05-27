import {useState} from 'react'
import { DayPicker } from 'react-day-picker';
import { useEffect } from 'react';

import 'react-day-picker/dist/style.css';

const CheckInOut = ({childToParent}) => {
  const [range, setRange] = useState();

  useEffect(() => {
    let from = FormatDate(range?.from);
    let to = FormatDate(range?.to);

    childToParent(from, to);
  }, [range])
  
  const FormatDate = (date) =>{
    date = new Date(date);
    return date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0');
  }
  return (
    <DayPicker
      mode="range"
      defaultMonth={new Date()}
      selected={range}
      onSelect={setRange}
    />
  );
}

export default CheckInOut