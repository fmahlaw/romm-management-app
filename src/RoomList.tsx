import React, { useState } from 'react';

interface Room {
  id: number;
  name: string;
  capacity: number;
  booked: boolean;
}

interface RoomListProps {
  rooms: Room[];
  onBook: (roomId: number) => void;
  onDelete: (roomId: number) => void; // New
  onEdit: (roomId: number) => void; // New
}

const RoomList: React.FC<RoomListProps> = ({ rooms, onBook, onDelete, onEdit }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [roomsPerPage] = useState(5);

  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = rooms.slice(indexOfFirstRoom, indexOfLastRoom);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>Available Rooms</h2>
      <ul>
        {currentRooms.map((room) => (
          <li key={room.id}>
            {room.name} (Capacity: {room.capacity})
            <button onClick={() => onBook(room.id)} disabled={room.booked}>
              Book
            </button>
            <button onClick={() => onEdit(room.id)}>Edit</button>
            <button onClick={() => onDelete(room.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {/* Pagination */}
      <ul className="pagination">
        {Array.from({ length: Math.ceil(rooms.length / roomsPerPage) }, (_, i) => (
          <li key={i} onClick={() => paginate(i + 1)}>
            {i + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomList;
