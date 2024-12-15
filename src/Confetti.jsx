// Confetti.js
import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const Confetti = () => {
  useEffect(() => {
    // הפעלת אפקט הקונפטי באופן קבוע כאשר הקומפוננטה טוענת
    const interval = setInterval(() => {
      confetti({
        particleCount: 1000, // מספר חלקיקי הקונפטי
        angle: 90, // זווית הזרימה
        spread: 700, // פיזור החלקיקים
        origin: { x: 0.5, y: 0.5 }, // המיקום מהיכן יתחיל אפקט הקונפטי (במרכז המסך)
        colors: ['#ff0000', '#ff7300', '#fffb00', '#00ff00', '#0070ff', '#8e2dff'], // צבעי החלקיקים
      });
    }, 1000); // כל 2 שניות הקונפטי יתפזר מחדש

    // עצירת האנימציה כשמתחילים לעזוב את הקומפוננטה
    return () => clearInterval(interval);
  }, []);

  return null; // אין צורך להציג אלמנט UI
};

export default Confetti;
