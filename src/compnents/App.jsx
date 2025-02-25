import AppBar from "./AppBar";
import PilotList from "./PilotList";
import officers from "../officers.json";

const activeOfficers = officers.filter((officer) => officer.active);

const youngOfficers = officers.filter((officer) => officer.age < 40);

export default function App() {
  return (
    <>
      <AppBar />

      <h2>Active officers</h2>
      <PilotList items={activeOfficers} />

      <h2>Young officers</h2>
      <PilotList items={youngOfficers} />
    </>
  );
}
