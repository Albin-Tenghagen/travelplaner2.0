import FormHeading from "./FormHeading";
import UserForm from "./UserForm";
import Aside from "../Aside/Aside";
import EditModal from "../../Animation-Effects/EditModal";
import { useState, useEffect } from "react";
// The main component that displays a list of activities
//* @param @param {Function} props.createActivity - Function to create and add a new activity.
function Main() {
  const [ActivityArray, setActivityArray] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null); // For the modal
  const [notification, setNotification] = useState(""); // For notifications
  const [showModal, setShowModal] = useState(false);

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
    setNotification("Activity added!");
    console.log("Activity created", Activity);
    console.log("Array updated", ActivityArray);
  }
  // Delete an activity
  const onDelete = (id) => {
    setActivityArray((prev) => prev.filter((Activity) => Activity.id !== id));
    setNotification("Activity deleted!");
  };

  // Open the edit modal by updating the modal state
  const onEdit = (id) => {
    const activityToEdit = ActivityArray.find((activity) => activity.id === id);
    setSelectedActivity(activityToEdit);
    setShowModal(true);
    setNotification("Activity edited!");
  };

  // Save the edited activity
  const saveEdit = (updatedActivity) => {
    const updatedActivities = ActivityArray.map((activity) =>
      activity.id === updatedActivity.id ? updatedActivity : activity
    );
    setActivityArray(updatedActivities);
    setShowModal(false);
    setSelectedActivity(null);
    setNotification("Activity edited!");
  };

  // Notification logic with useEffect
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(""), 3000); // Clear notification after 3 seconds
      return () => clearTimeout(timer); // Cleanup to avoid memory leaks
    }
  }, [notification]);

  return (
    <>
      <FormHeading />
      {notification && <div className="notification">{notification}</div>}{" "}
      {/* Notification */}
      <UserForm createActivity={createActivity} />
      <Aside
        ActivityArray={ActivityArray}
        onEdit={onEdit}
        onDelete={onDelete}
      />
      {/*ternary operator evaluates if the showModal state is false or true, if false the modal wont render, but if it is true it will render, onClose button sets the state to false, therefore cancelling the edit */}
      {showModal ? (
        <EditModal
          activity={selectedActivity}
          saveEdit={saveEdit}
          onClose={() => setShowModal(false)}
        />
      ) : null}
    </>
  );
}

export default Main;
