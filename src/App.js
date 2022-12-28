import "./App.css";
import { UserProvider, useUser } from "./UserContext";

function App() {
  const { user } = useUser();
  return (
    <div className="App">
      <h1>Hello {user.name}</h1>
    </div>
  );
}

function Root() {
  console.log("Root COmponent");
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}

export default Root;
