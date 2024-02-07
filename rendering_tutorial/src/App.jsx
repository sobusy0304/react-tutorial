import UserGreeting from "./UserGreeting";

function App() {
  return(
      <>
        <UserGreeting isLoggedIn={true} username="Steven"/>
        <UserGreeting />
      </>
  );
}

export default App
