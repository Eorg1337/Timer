import React from "react";
import { useEffect,useState } from "react";

const MyTimer = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    useEffect(() => {
      if (seconds === 60) {
        setSeconds(0);
        setMinutes((prevMinutes) => prevMinutes + 1);
      }
    }, [seconds]);
  
    useEffect(() => {
      if (minutes === 60) {
        setMinutes(0);
        setHours((prevHours) => prevHours + 1);
      }
    }, [minutes]);
  
    return (
      <div>
          <h1>{`${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}
          </h1>
      </div>
    );
  }

export default MyTimer;