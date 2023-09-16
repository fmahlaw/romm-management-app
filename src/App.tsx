import React, { useState } from 'react';
import RoomList from './RoomList';
import BookingForm from './BookingForm';
import BookedRooms from './BookedRooms';

const initialRooms = [
  { id: 1, name: 'Room 1', capacity: 10, booked: false },
  { id: 2, name: 'Room 2', capacity: 8, booked: false },
  // ...other room data
];

const App: React.FC = () => {
  const [rooms, setRooms] = useState(initialRooms);

  const handleBooking = (roomId: number) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === roomId ? { ...room, booked: true } : room
      )
    );
  };

  const handleDelete = (roomId: number) => {
    setRooms((prevRooms) => prevRooms.filter((room) => room.id !== roomId));
  };

  const handleEdit = (roomId: number) => {
    // Handle editing functionality (to be implemented)
    console.log('Edit room with ID:', roomId);
  };

  return (
    <div>
      <RoomList rooms={rooms} onBook={handleBooking} onDelete={handleDelete} onEdit={handleEdit} />
      <BookingForm />
      <BookedRooms rooms={rooms} />
    </div>
  );
};

export default App;
