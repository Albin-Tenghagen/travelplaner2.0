import ActivityList from "./ActivityList";

// The Aside component that displays a list of activities.
// * @param {Object} props - The props object.
// * @param {Activity[]} props.ActivityArray - Array of activity objects to display
//  * @param {Function} onEdit - enables the user to edit activity
//  * @param {Function} onDelete - Deletes the activity and removes it from the DOM

function Aside({ ActivityArray, onEdit, onDelete }) {
  return (
    <section>
      {/* Pass the ActivityArray to the AktivityList component */}
      <ActivityList
        ActivityArray={ActivityArray}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </section>
  );
}

export default Aside;
