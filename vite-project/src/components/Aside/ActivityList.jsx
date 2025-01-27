import ActivityItem from "./ActivityItem";

// The AktivityList component that renders a list of activity items.
// * @param {Object} props - The props object.
// * @param {Activity[]} props.ActivityArray - Array of activity objects to display.

function AktivityList({ ActivityArray, onEdit, onDelete }) {
  return (
    <section>
      <h3>Sparade Aktiviteter</h3>
      <section>
        {/* Render each activity as an AktivityItem component */}
        {ActivityArray.map((Activity) => (
          <ActivityItem
            key={Activity.id}
            {...Activity}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </section>
    </section>
  );
}

export default AktivityList;
