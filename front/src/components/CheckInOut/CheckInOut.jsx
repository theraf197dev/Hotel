import {useState} from 'react'
import { DayPicker } from 'react-day-picker';
import { useEffect } from 'react';
import es from 'date-fns/locale/es';

import 'react-day-picker/dist/style.css';

const CheckInOut = ({childToParent}) => {
  const [range, setRange] = useState({to: new Date('2022-05-28'), from: new Date('2022-05-22')});

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
      locale={es}
    />
  );
}

export default CheckInOut