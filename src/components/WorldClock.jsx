import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

function WorldClock() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await axios.get("http://worldtimeapi.org/api/timezone/Asia/Jakarta");
        setTime(response.data.datetime);
      } catch (error) {
        console.error("Error fetching time:", error);
      }
    };

    fetchTime();

    // Refresh time every second
    const intervalId = setInterval(fetchTime, 1000);

    // Cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p>Current Time in East Java</p>
      {time && <p>{moment(time).format("YYYY-MM-DD HH:mm:ss")}</p>}
    </div>
  );
}

export default WorldClock;
