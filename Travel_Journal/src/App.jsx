
import Header from "./components/Header";
import Entry from "./components/entry";

export default function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <Entry />
      </div>
    </>
  );
}