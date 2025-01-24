import FormHeading from "./FormHeading";
import UserForm from "./UserForm";
// The main component that displays a list of activities
//* @param @param {Function} props.createActivity - Function to create and add a new activity.
function Main(props) {
  const { createActivity } = props;

  return (
    <main>
      <FormHeading />
      <UserForm createActivity={createActivity} />
    </main>
  );
}

export default Main;
