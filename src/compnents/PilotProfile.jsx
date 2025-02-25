// export default function PilotProfile(props) {
//   const { name, rank, age, spec } = props.pilot;

export default function PilotProfile({
  pilot: { name, rank, age, spec, active },
}) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Rank: {rank}</p>
      <p>Age: {age}</p>
      <p>Specialty: {spec}</p>
      {/* {active ? <p>Status: Active</p> : <p>Status: Retired</p>} */}
      <p>Status: {active ? "Active" : "Retired"}</p>
    </div>
  );
}
