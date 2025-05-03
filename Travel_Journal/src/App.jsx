
import Header from "./components/Header";
import Entry from "./components/entry";
import data from "./data";

export default function App() {
  const travelData = data.map((dt) => {
    return <Entry
      key={dt.id}
      {...dt}
    />
  })
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="body">
        {travelData}
      </div>
    </>
  );
}