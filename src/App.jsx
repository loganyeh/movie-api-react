import NavBar from "./component/NavBar";
import Movies from "./component/Movies";

function App() {
  return (
    <>
      <div className="h-screen w-screen flex">
        <NavBar />
        <Movies />
      </div>
    </>
  );
}

export default App;
