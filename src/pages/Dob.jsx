import React, { useState, useEffect } from "react";

export default function AgeCounter() {
  const birthDate = new Date("2005-08-11"); // Replace with your birthday
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

  const calculateAge = () => {
    const now = new Date();

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
      months -= 1;
      // Get number of days in the previous month
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setAge({ years, months, days });
  };

  useEffect(() => {
    calculateAge(); // calculate immediately
    const interval = setInterval(calculateAge, 1000 * 60 * 60 * 24); // update daily at midnight
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" w-[40%] flex mx-auto mt-6 text-center text-2xl flex">
      <p className=" border rounded-4xl ">
        <span className="text-4xl font-semibold">Age: </span>
        {age.years} years, {age.months} months and {age.days} days old
      </p>
    </div>
  );
}
