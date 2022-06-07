import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title">{new Date().toDateString()}</h1>
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default App;
