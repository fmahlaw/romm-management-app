import React from 'react';

interface Room {
  id: number;
  name: string;
  booked: boolean;
}

interface BookedRoomsProps {
  rooms: Room[];
}

const BookedRooms: React.FC<BookedRoomsProps> = ({ rooms }) => {
  const bookedRooms = rooms.filter((room) => room.booked);

  return (
    <div>
      <h2>Booked Rooms</h2>
      <ul>
        {bookedRooms.map((room) => (
          <li key={room.id}>{room.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookedRooms;
