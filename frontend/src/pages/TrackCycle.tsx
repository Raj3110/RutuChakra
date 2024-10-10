import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Navbar from "../components/Navbar.tsx";

// Set up the localizer for react-big-calendar
const localizer = momentLocalizer(moment);

const TrackCycle = () => {
  const [lastPeriod, setLastPeriod] = useState(moment());
  const [cycleLength, setCycleLength] = useState(28);
  const [events, setEvents] = useState([]);

  const updateCalendar = () => {
    const newEvents = [];
    let currentDate = moment(lastPeriod);

    // Generate events for the next 6 months
    for (let i = 0; i < 6; i++) {
      // Period event
      newEvents.push({
        start: currentDate.toDate(),
        end: currentDate.clone().add(5, 'days').toDate(),
        title: 'Period',
        color: '#FFC0CB' // Light pink
      });

      // Ovulation event
      const ovulationDate = currentDate.clone().add(cycleLength - 14, 'days');
      newEvents.push({
        start: ovulationDate.toDate(),
        end: ovulationDate.clone().add(1, 'days').toDate(),
        title: 'Ovulation',
        color: '#FF69B4' // Hot pink
      });

      currentDate = currentDate.add(cycleLength, 'days');
    }

    setEvents(newEvents);
  };

  const eventStyleGetter = (event) => {
    return {
      style: {
        backgroundColor: event.color,
        borderRadius: '5px',
        opacity: 0.8,
        color: 'black',
        border: 'none',
        display: 'block'
      }
    };
  };

  return (
    <div className="h-screen flex flex-col bg-pink-50">
      <Navbar item={"Cycle Tracker"}/>
      <header className="bg-pink-600 text-white p-4">
        <h1 className="text-2xl font-thin italic text-center">Track Your Periods</h1>
      </header>
      <div className="flex-grow flex">
        <div className="w-1/4 p-4 bg-pink-100">
          <h2 className="text-xl font-semibold mb-4">Track Your Cycle</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Period Start Date:
            </label>
            <input
              type="date"
              value={lastPeriod.format('YYYY-MM-DD')}
              onChange={(e) => setLastPeriod(moment(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cycle Length (days):
            </label>
            <input
              type="number"
              value={cycleLength}
              onChange={(e) => setCycleLength(parseInt(e.target.value))}
              min="20"
              max="45"
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            onClick={updateCalendar}
            className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600 transition-colors"
          >
            Update Calendar
          </button>
        </div>
        <div className="w-3/4 p-4">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '100%' }}
            eventPropGetter={eventStyleGetter}
          />
        </div>
      </div>
    </div>
  );
};

export default TrackCycle;