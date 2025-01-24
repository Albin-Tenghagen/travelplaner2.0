// The AktivityItem component that renders details of a single activity.
//  * @param {Activity} props - The activity details passed as props.
function AktivityItem({ name, description, date, location }) {
  return (
    <article>
      <h4>{name}</h4>
      <p>{location}</p>
      <p>{description}</p>
      <p>{date}</p>
    </article>
  );
}

export default AktivityItem;
