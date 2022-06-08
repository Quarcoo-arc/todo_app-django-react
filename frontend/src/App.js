import { UserContextProvider } from "./context/UserContext";
import LandingPage from "./pages/LandingPage";
function App() {
  return (
    <UserContextProvider>
      <div className="container">
        <LandingPage />
      </div>
    </UserContextProvider>
  );
}

export default App;
