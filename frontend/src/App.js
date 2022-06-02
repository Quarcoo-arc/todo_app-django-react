import Form from "./components/Form";

function App() {
  return (
    <div className="container">
      <h1 className="title">{new Date().toDateString()}</h1>
      <Form />
    </div>
  );
}

export default App;
