import PilotProfile from "./PilotProfile";

export default function PilotList({ items }) {
  return (
    <ul>
      {items.map((officer) => (
        <li key={officer.id}>
          <PilotProfile pilot={officer} />
          <hr />
        </li>
      ))}
    </ul>
  );
}
