import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(0);
  const [years, setYears] = useState(0);
  const [days, setDays] = useState(0);

  const calculateAge = () => {
    const currentDate = new Date();
    const birthDateObj = new Date(birthDate);

    // Calculate age in milliseconds
    const ageInMillis = currentDate - birthDateObj;

    // Convert milliseconds to years and days
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365;
    const years = Math.floor(ageInMillis / millisecondsInYear);
    const days = Math.floor((ageInMillis % millisecondsInYear) / (1000 * 60 * 60 * 24));

    setAge(ageInMillis);
    setYears(years);
    setDays(days);
  };

  return (
    <div>
      <label>Enter Birth Date:</label>
      <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
      <button onClick={calculateAge}>Calculate</button>

      {age > 0 && (
        <div>
          <p>Age: {age} milliseconds</p>
          <p>Years: {years}</p>
          <p>Days: {days}</p>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
