import React, { useState } from 'react';

const BookingForm: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleRoomSelection = (roomId: number) => {
    setSelectedRoom(roomId);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRoom !== null) {
      // Send booking request to the server (simulated)
      setBookingConfirmed(true);
      console.log('Booking room with ID:', selectedRoom);
    }
  };

  return (
    <div>
      <h2>Book a Room</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="room">Select a room:</label>
        <select id="room" onChange={(e) => handleRoomSelection(Number(e.target.value))}>
          <option value="">Select a room</option>
          <option value="1">Room 1</option>
          <option value="2">Room 2</option>
          {/* ...other room options */}
        </select>
        <button type="submit" disabled={selectedRoom === null}>Book Room</button>
      </form>
      {bookingConfirmed && <div>Your room has been booked!</div>}
    </div>
  );
};

export default BookingForm;
