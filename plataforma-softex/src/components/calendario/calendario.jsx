"use client"
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './style.css';


function Calendario() {
  const [value, setValue] = useState(new Date());
  const [diasDeAula, setDiasDeAula] = useState(1); 
  const [presencas, setPresencas] = useState([]);
  const [faltas, setFaltas] = useState([]);

  const onChange = (nextValue) => {
    setValue(nextValue);
  };

  const tileClassName = ({ date }) => {
    const isPresenca = presencas.find((presenca) => presenca.dia.getDate() === date.getDate());
    const isFalta = faltas.find((falta) => falta.dia.getDate() === date.getDate());

    if (isPresenca) {
      return 'green-day';
    } else if (isFalta) {
      return 'red-day';
    }

    if (diasDeAula === 0) {
      const isMonday = date.getDay() === 1; 
      const isWednesday = date.getDay() === 3;

      return isMonday || isWednesday ? 'marked-day' : '';
    } else if (diasDeAula === 1) {
      const isTuesday = date.getDay() === 2;
      const isThursday = date.getDay() === 4;

      return isTuesday || isThursday ? 'marked-day' : '';
    } else {
      return '';
    }
  };

  const handleDayClick = (date) => {
    const presenca = window.prompt(`Aluno presente(1) ou ausente(2)?`);
    
    if (presenca === '1') {
      setPresencas([...presencas, { dia: date }]);
    } else if (presenca === '2') {
      setFaltas([...faltas, { dia: date }]);
    } else {
      alert('Opção inválida. Escolha 1 para presente ou 2 para ausente.');
    }
  };

  return (
    <div>
      <Calendar 
        onChange={onChange}
        value={value}
        tileClassName={tileClassName}
        onClickDay={handleDayClick}
        className={"custom-calendar"}
      />
    </div>
  );
}

export default Calendario