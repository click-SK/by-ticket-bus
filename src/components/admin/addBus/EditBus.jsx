import React, { useState } from 'react';
import '../../../style/editBus.scss'

const EditBus = ({ bus, onSave, onCancel }) => {
  const [editedBus, setEditedBus] = useState({ ...bus });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setEditedBus((prevBus) => ({ ...prevBus, [name]: inputValue }));
  };

  const handleSave = () => {
    onSave(editedBus);
  };

  const handleCancel = () => {
    onCancel();
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
            value={editedBus.nameBus}
            onChange={handleInputChange}
          />
        </div>
        <div className="edit-bus-input">
          <label htmlFor="edit-number">Bus Number</label>
          <input
            id="edit-number"
            type="text"
            name="number"
            value={editedBus.number}
            onChange={handleInputChange}
          />
        </div>
        <div className="edit-bus-input">
          <label htmlFor="edit-seats">Seats</label>
          <input
            id="edit-seats"
            type="number"
            name="seats"
            value={editedBus.seats}
            onChange={handleInputChange}
          />
        </div>
        <div className="edit-bus-input input-checkbox_bus">
          <label htmlFor="edit-toilet">Toilet</label>
          <input
            id="edit-toilet"
            className='checkbox'
            type="checkbox"
            name="toilet"
            checked={editedBus.toilet}
            onChange={handleInputChange}
          />
        </div>
        <div className="edit-bus-input input-checkbox_bus">
          <label htmlFor="edit-wifi">Wifi</label>
          <input
            id="edit-wifi"
            type="checkbox"
            className='checkbox'
            name="wifi"
            checked={editedBus.wifi}
            onChange={handleInputChange}
          />
        </div>
        <div className="edit-bus-buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>

      </div>
    </div>
  );
};

export default EditBus;