import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <h1 className="title">{new Date().toDateString()}</h1>
      <Form />
      <Footer />
    </div>
  );
}

export default App;
