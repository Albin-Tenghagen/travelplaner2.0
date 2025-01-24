// The AktivityItem component that renders details of a single activity.
//  * @param {Activity} props - The activity details passed as props.
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
      <p>{location}</p>
      <p>{description}</p>
      <p>{date}</p>
      <button onClick={editBtnClick}>Edit</button>
      <button onClick={deleteBtnClick}>Delete</button>
      {/* <input type="checkbox">Complete</input> */}
    </article>
  );
}

export default AktivityItem;
