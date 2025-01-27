import { useState } from "react";

function EditModal({ activity, saveEdit, onClose }) {
  const [name, setName] = useState(activity.name);
  const [description, setDescription] = useState(activity.description);
  const [date, setDate] = useState(activity.date);
  const [location, setLocation] = useState(activity.location);

  const handleSave = () => {
    const updatedActivity = { ...activity, name, description, date, location };
    saveEdit(updatedActivity); // Pass updated activity to the parent
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Edit Activity</h3>
        <p>
          <label>Activity Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          <label>Activity Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </p>
        <p>
          <label>Activity Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </p>
        <p>
          <label>Activity Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </p>
        <button className="saveButton" onClick={handleSave}>
          Save
        </button>
        <button className="cancelButton" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditModal;
