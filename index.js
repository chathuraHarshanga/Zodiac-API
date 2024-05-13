const express = require('express');
const app = express();
const port = 3000;

// Endpoint to get zodiac sign based on birthday
app.get('/zodiac', (req, res) => {
  const { birthday } = req.query;

  // Validate birthday format (assuming it's in yyyy-mm-dd format)
  const birthdayRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!birthdayRegex.test(birthday)) {
    return res.status(400).json({ error: 'Invalid birthday format. Please use yyyy-mm-dd.' });
  }

  // Extract month and day from birthday
  const [year, month, day] = birthday.split('-');
  const monthNumber = parseInt(month);
  const dayNumber = parseInt(day);

  // Determine zodiac sign based on month and day
  let zodiacSign, description;
  if ((monthNumber === 1 && dayNumber >= 20) || (monthNumber === 2 && dayNumber <= 18)) {
    zodiacSign = 'Aquarius';
    description = 'You are innovative, eccentric, and known for your humanitarian values.';
  } else if ((monthNumber === 2 && dayNumber >= 19) || (monthNumber === 3 && dayNumber <= 20)) {
    zodiacSign = 'Pisces';
    description = 'You are intuitive, compassionate, and often dreamy or artistic.';
  } else if ((monthNumber === 3 && dayNumber >= 21) || (monthNumber === 4 && dayNumber <= 19)) {
    zodiacSign = 'Aries';
    description = 'You are bold, energetic, and thrive on challenges and new experiences.';
  } else if ((monthNumber === 4 && dayNumber >= 20) || (monthNumber === 5 && dayNumber <= 20)) {
    zodiacSign = 'Taurus';
    description = 'You are reliable, practical, and enjoy the comforts of life.';
  } else if ((monthNumber === 5 && dayNumber >= 21) || (monthNumber === 6 && dayNumber <= 20)) {
    zodiacSign = 'Gemini';
    description = 'You are adaptable, curious, and often skilled in communication.';
  } else if ((monthNumber === 6 && dayNumber >= 21) || (monthNumber === 7 && dayNumber <= 22)) {
    zodiacSign = 'Cancer';
    description = 'You are nurturing, sensitive, and deeply connected to your emotions and home.';
  } else if ((monthNumber === 7 && dayNumber >= 23) || (monthNumber === 8 && dayNumber <= 22)) {
    zodiacSign = 'Leo';
    description = 'You are confident, charismatic, and love being in the spotlight.';
  } else if ((monthNumber === 8 && dayNumber >= 23) || (monthNumber === 9 && dayNumber <= 22)) {
    zodiacSign = 'Virgo';
    description = 'You are analytical, detail-oriented, and strive for perfection.';
  } else if ((monthNumber === 9 && dayNumber >= 23) || (monthNumber === 10 && dayNumber <= 22)) {
    zodiacSign = 'Libra';
    description = 'You are diplomatic, fair-minded, and value harmony in relationships.';
  } else if ((monthNumber === 10 && dayNumber >= 23) || (monthNumber === 11 && dayNumber <= 21)) {
    zodiacSign = 'Scorpio';
    description = 'You are passionate, resourceful, and have a deep sense of intuition.';
  } else if ((monthNumber === 11 && dayNumber >= 22) || (monthNumber === 12 && dayNumber <= 21)) {
    zodiacSign = 'Sagittarius';
    description = 'You are adventurous, optimistic, and love exploring new horizons.';
  } else {
    zodiacSign = 'Capricorn';
    description = 'You are responsible, disciplined, and focused on achieving your goals.';
  }

  // Return zodiac sign and description
  res.json({ birthday, zodiacSign, description });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
