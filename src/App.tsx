import CreateUser from "./components/CreateUser";
import ListOfUsers from "./components/ListOfUsers";
import UpdatePassword from "./components/UpdatePassword";

function App() {

  
  return (
    <div className="App">
      <CreateUser />
      <br /><br />
      <ListOfUsers />
      <br /><br />
      <UpdatePassword />
    </div>
  );
}

export default App;
