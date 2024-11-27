import ToDoList from "./components/layout/ToDoList";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: "url('background.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "center",

        width: "100vw",
        height: "100vh",
      }}
    >
      <ToDoList />
    </div>
  );
}

export default App;
