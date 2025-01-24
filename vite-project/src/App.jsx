import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Aside from "./components/Aside/Aside";

import "./App.css";
// * The main App component that manages activities and renders the application layout.
function App() {
  // State to store the array of activities.
  const [ActivityArray, setActivityArray] = useState([]);

  // Function to create and add a new activity to the ActivityArray
  function createActivity(newActivity) {
    // Create a new activity object with an ID (based on the current length of ActivityArray)
    const Activity = {
      id: ActivityArray.length + 1,
      name: newActivity.name,
      description: newActivity.description,
      date: newActivity.date,
      location: newActivity.location,
    };

    // Update the state with new activity
    setActivityArray([...ActivityArray, Activity]);

    console.log("Activity created", Activity);
    console.log("Array updated", ActivityArray);
  }

  return (
    <>
      <Header />
      <Main createActivity={createActivity} />
      <Aside ActivityArray={ActivityArray} />
      <Footer />
    </>
  );
}
// Activity interface to outline the Activity object, it was moved outside the function App to be exportable to Aside

export default App;
