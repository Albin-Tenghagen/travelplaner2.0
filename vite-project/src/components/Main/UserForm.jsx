//  The UserForm component that allows users to input details for a new activity.
//  * @param {Object} props - The props object.
//  * @param {Function} props.createActivity - Function to create and add a new activity.

import { use } from "react";
import { useState } from "react";

function UserForm(props) {
  const { createActivity } = props;

  // Define local states  to capture user input
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [inputErrors, setInputErrors] = useState({});
  // Handle button click to create a new activity
  const handleBtnClick = () => {
    console.log("Button clicked");
    const errors = {};
    if (!name) errors.name = "namn måste fyllas i";
    if (!description) errors.description = "beskrivning måste fyllas i";
    if (!location) errors.location = "plats måste fyllas i";
    if (!date) errors.date = " datum måste fyllas i";

    if (Object.keys(errors).length > 0) {
      setInputErrors(errors); // Highlight the empty fields

      return;
    }

    // Clear error messages
    setInputErrors({});
    // Create a new Activity object
    const newActivity = {
      name: name,
      description: description,
      location: location,
      date: date,
    };

    // Call the createActivity function passed from the parent
    createActivity(newActivity);

    setName("");
    setDate("");
    setDescription("");
    setLocation("");
  };

  return (
    <article>
      {/* inputs with onChange event to capture the userInput and updates the corresponding state with*/}
      <p id="alertMessage" style={{ color: "red" }}></p>
      <p>Aktivitets Namn:</p>
      <input
        type="text"
        value={name}
        placeholder={inputErrors.name || "Skriv in aktivitets namn"}
        onChange={(event) => setName(event.target.value)}
      />

      <p>Aktivitets Beskrivning:</p>
      <input
        type="textarea"
        value={description}
        placeholder={
          inputErrors.description || "Skriv in aktivitens beskrivning"
        }
        onChange={(event) => setDescription(event.target.value)}
      />

      <p>Aktivitets Datum:</p>
      <input
        type="date"
        value={date}
        placeholder={inputErrors.date || ""}
        onChange={(event) => setDate(event.target.value)}
      />

      <p>Aktivitets Plats:</p>
      <input
        type="text"
        value={location}
        placeholder={inputErrors.location || "Skriv in aktivitets plats"}
        onChange={(event) => setLocation(event.target.value)}
      />
      {/* Button to save the activity */}
      <button onClick={handleBtnClick}>Spara Aktivitet</button>
    </article>
  );
}

export default UserForm;
