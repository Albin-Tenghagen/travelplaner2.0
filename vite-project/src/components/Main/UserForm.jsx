//  The UserForm component that allows users to input details for a new activity.
//  * @param {Object} props - The props object.
//  * @param {Function} props.createActivity - Function to create and add a new activity.

function UserForm(props) {
  const { createActivity } = props;

  // Define local variables to hold the user input
  let activityName = "";
  let activityDescription = "";
  let activityDate = "";
  let activityLocation = "";

  let alertMessage = "";
  // Handle button click to create a new activity
  const handleBtnClick = () => {
    console.log("Button clicked");
    if (
      !activityName ||
      !activityDescription ||
      !activityLocation ||
      !activityDate
    ) {
      alertMessage = "Alla fält måste fyllas i!";
      document.getElementById("alertMessage").textContent = alertMessage;
      return;
    }

    alertMessage = "";
    document.getElementById("alertMessage").textContent = alertMessage;
    // Create a new Activity object
    const newActivity = {
      name: activityName,
      description: activityDescription,
      location: activityLocation,
      date: activityDate,
    };

    // Call the createActivity function passed from the parent
    createActivity(newActivity);
  };

  return (
    <article>
      {/* inputs with onChange event to capture the userInput and passing the input value to the localvariables */}
      <p id="alertMessage" style={{ color: "red" }}></p>
      <p>Aktivitets Namn:</p>
      <input
        type="text"
        onChange={(event) => (activityName = event.target.value)}
      />

      <p>Aktivitets Plats:</p>
      <input
        type="text"
        onChange={(event) => (activityLocation = event.target.value)}
      />

      <p>Aktivitets Beskrivning:</p>
      <input
        type="text"
        onChange={(event) => (activityDescription = event.target.value)}
      />

      <p>Aktivitets Datum:</p>
      <input
        type="text"
        onChange={(event) => (activityDate = event.target.value)}
      />

      {/* Button to save the activity */}
      <button onClick={handleBtnClick}>Spara Aktivitet</button>
    </article>
  );
}

export default UserForm;
