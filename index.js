const express = require('express');
const app = express();
const port = 9090;

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
    description = `
      As an Aquarius, you are known for your innovative thinking, humanitarian values, and independent nature. 
      You enjoy intellectual discussions, socializing with like-minded individuals, and embracing unique ideas.
      Your free-spirited approach to life often leads you to pursue unconventional paths and make a positive impact on the world.
    `;
  } else if ((monthNumber === 2 && dayNumber >= 19) || (monthNumber === 3 && dayNumber <= 20)) {
    zodiacSign = 'Pisces';
    description = `
      As a Pisces, you are intuitive, compassionate, and deeply connected to your emotions and spirituality. 
      You have a creative mind and a strong sense of empathy, making you a great listener and a caring friend.
      Your dreamy nature and artistic talents often lead you to seek beauty and meaning in the world around you.
    `;
  } else if ((monthNumber === 3 && dayNumber >= 21) || (monthNumber === 4 && dayNumber <= 19)) {
    zodiacSign = 'Aries';
    description = `
      As an Aries, you are bold, energetic, and thrive on challenges and new experiences. 
      You have a strong sense of leadership and are not afraid to take initiative and pursue your goals with passion.
      Your adventurous spirit and competitive nature drive you to push boundaries and achieve greatness.
    `;
  } else if ((monthNumber === 4 && dayNumber >= 20) || (monthNumber === 5 && dayNumber <= 20)) {
    zodiacSign = 'Taurus';
    description = `
      As a Taurus, you are reliable, practical, and enjoy the comforts of life. 
      You value stability and security, and your strong determination helps you achieve your long-term goals.
      Your love for beauty and luxury often leads you to appreciate the finer things in life and create a harmonious environment.
    `;
  } else if ((monthNumber === 5 && dayNumber >= 21) || (monthNumber === 6 && dayNumber <= 20)) {
    zodiacSign = 'Gemini';
    description = `
      As a Gemini, you are adaptable, curious, and often skilled in communication. 
      You have a dual nature, allowing you to see multiple perspectives and adapt to different situations with ease.
      Your quick wit and social charm make you a captivating conversationalist and a versatile thinker.
    `;
  } else if ((monthNumber === 6 && dayNumber >= 21) || (monthNumber === 7 && dayNumber <= 22)) {
    zodiacSign = 'Cancer';
    description = `
      As a Cancer, you are nurturing, sensitive, and deeply connected to your emotions and home. 
      You value emotional security and create strong bonds with your loved ones, often taking on a protective role.
      Your intuition and empathy guide your decisions, making you a compassionate and caring individual.
    `;
  } else if ((monthNumber === 7 && dayNumber >= 23) || (monthNumber === 8 && dayNumber <= 22)) {
    zodiacSign = 'Leo';
    description = `
      As a Leo, you are confident, charismatic, and love being in the spotlight. 
      You have a strong sense of self and enjoy expressing your creativity and talents to inspire others.
      Your leadership qualities and generosity make you a natural-born leader and a loyal friend.
    `;
  } else if ((monthNumber === 8 && dayNumber >= 23) || (monthNumber === 9 && dayNumber <= 22)) {
    zodiacSign = 'Virgo';
    description = `
      As a Virgo, you are analytical, detail-oriented, and strive for perfection. 
      You have a methodical approach to life and excel at organizing tasks and solving complex problems.
      Your practicality and attention to detail make you a valuable team member and a reliable ally.
    `;
  } else if ((monthNumber === 9 && dayNumber >= 23) || (monthNumber === 10 && dayNumber <= 22)) {
    zodiacSign = 'Libra';
    description = `
      As a Libra, you are diplomatic, fair-minded, and value harmony in relationships. 
      You have a strong sense of justice and seek balance and equality in all aspects of life.
      Your charm and sociability make you a peacemaker and a trusted confidant to those around you.
    `;
  } else if ((monthNumber === 10 && dayNumber >= 23) || (monthNumber === 11 && dayNumber <= 21)) {
    zodiacSign = 'Scorpio';
    description = `
      As a Scorpio, you are passionate, resourceful, and have a deep sense of intuition. 
      You are fiercely loyal to your loved ones and possess a magnetic charisma that draws others to you.
      Your determination and insightfulness make you a formidable ally and a powerful force to be reckoned with.
    `;
  } else if ((monthNumber === 11 && dayNumber >= 22) || (monthNumber === 12 && dayNumber <= 21)) {
    zodiacSign = 'Sagittarius';
    description = `
      As a Sagittarius, you are adventurous, optimistic, and love exploring new horizons. 
      You have a thirst for knowledge and a love for freedom that drives you to seek new experiences.
      Your open-mindedness and enthusiasm make you a great storyteller and a lifelong learner.
    `;
  } else {
    zodiacSign = 'Capricorn';
    description = `
      As a Capricorn, you are responsible, disciplined, and focused on achieving your goals. 
      You have a strong work ethic and a practical approach to life, allowing you to overcome challenges with determination.
      Your ambition and perseverance make you a natural leader and a reliable partner in both personal and professional endeavors.
    `;
  }

  // Return zodiac sign and description
  res.json({ birthday, zodiacSign, description });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
