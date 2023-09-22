import React, { useState, useEffect } from 'react';
import '../../../style/editBus.scss'
import axios from 'axios';
import { API_URL } from '../../../http/baseUrl';

const EditBus = ({ item, isOpen, setisOpen }) => {
  const [nameBus, setNameBus] = useState('');
  const [numberBus, setNumberBus] = useState('');
  const [seats, setSeats] = useState('');
  const [toilet, setToilet] = useState(false);
  const [wifi, setWifi] = useState(false);

  useEffect(() => {
    setNameBus(item.nameBus);
    setNumberBus(item.numberBus);
    setSeats(item.seats);
    setToilet(item.toilet);
    setWifi(item.wifi);
  },[])

  const handleSave = () => {
    axios.patch(`${API_URL}/update-bus`, {
      id: item._id,
      nameBus,
      numberBus,
      seats,
      toilet,
      wifi
    }) .then(() => {
      alert('edited bus')
      window.location.reload();
    }).catch((error) => {
      console.error('Request error:', error);
    });
  };

  return (
    <div className="edit-bus-form-wrap">
      <div className="edit-bus-form">
        <div className="edit-bus-input">
          <label htmlFor="edit-nameBus">Name Bus</label>
          <input
            id="edit-nameBus"
            type="text"
            name="nameBus"
            value={nameBus}
            onChange={(e) => setNameBus(e.target.value)}
          />
        </div>
        <div className="edit-bus-input">
          <label htmlFor="edit-number">Bus Number</label>
          <input
            id="edit-number"
            type="text"
            name="number"
            value={numberBus}
            onChange={(e) => setNumberBus(e.target.value)}
          />
        </div>
        <div className="edit-bus-input">
          <label htmlFor="edit-seats">Seats</label>
          <input
            id="edit-seats"
            type="number"
            name="seats"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
          />
        </div>
        <div className="edit-bus-input input-checkbox_bus">
          <label htmlFor="edit-toilet">Toilet</label>
          <input
            id="edit-toilet"
            className='checkbox'
            type="checkbox"
            name="toilet"
            checked={toilet}
            onChange={() => setToilet((state) => !state)}
          />
        </div>
        <div className="edit-bus-input input-checkbox_bus">
          <label htmlFor="edit-wifi">Wifi</label>
          <input
            id="edit-wifi"
            type="checkbox"
            className='checkbox'
            name="wifi"
            checked={wifi}
            onChange={() => setWifi((state) => !state)}
          />
        </div>
        <div className="edit-bus-buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setisOpen((state) => !state)}>Cancel</button>
        </div>

      </div>
    </div>
  );
};

export default EditBus;