// src/AgeCalculator.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AgeCalculator = () => {
  const [dateOfBirth, setDateOfBirth] = useState({ day: '', month: '', year: '' });
  const [age, setAge] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDateOfBirth((prev) => ({ ...prev, [name]: value }));
  };

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth.year, dateOfBirth.month - 1, dateOfBirth.day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setAge(age);
  };

  return (
  
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="age-calculator"
    >
      <h2>Age Calculator</h2>
      <div>
        <label>
          Day:
          <input type="number" name="day" value={dateOfBirth.day} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Month:
          <input type="number" name="month" value={dateOfBirth.month} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Year:
          <input type="number" name="year" value={dateOfBirth.year} onChange={handleChange} />
        </label>
      </div>
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>Your age is: {age}</p>}
    </motion.div>
    
  );
};

export default AgeCalculator;
