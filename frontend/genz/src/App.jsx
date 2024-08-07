import Home from "./components/Dashboard/Home";
import HomePage from "./components/HomePage";
import { UserContextProvider } from "./context/UserContext";
function App() {
  return (
    <UserContextProvider>
      <HomePage />
    </UserContextProvider>
    // <Home/>
  );
}

export default App;
