import ActivityList from "./ActivityList";

// The Aside component that displays a list of activities.
// * @param {Object} props - The props object.
// * @param {Activity[]} props.ActivityArray - Array of activity objects to display

function Aside({ ActivityArray }) {
  console.log("Aside Array", ActivityArray);
  return (
    <section>
      {/* Pass the ActivityArray to the AktivityList component */}
      <ActivityList ActivityArray={ActivityArray} />
    </section>
  );
}

export default Aside;
