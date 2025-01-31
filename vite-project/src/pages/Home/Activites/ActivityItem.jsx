// The AktivityItem component that renders details of a single activity.
//  * @param {Activity} props - The activity details passed as props.
//  * @param {Function} onEdit - enables the user to edit activity
//  * @param {Function} onDelete - Deletes the activity and removes it from the DOM
function AktivityItem({
  id,
  name,
  description,
  date,
  location,
  onEdit,
  onDelete,
}) {
  function editBtnClick() {
    console.log("Edit working");
    onEdit(id);
  }
  function deleteBtnClick() {
    console.log("Delete working");
    onDelete(id);
  }

  return (
    <article>
      <h4>{name}</h4>
      <p>{description}</p>
      <p>{location}</p>
      <p>{date}</p>
      <button onClick={editBtnClick}>Edit</button>
      <button onClick={deleteBtnClick}>Delete</button>
      {/* <input type="checkbox">Complete</input> */}
    </article>
  );
}

export default AktivityItem;
