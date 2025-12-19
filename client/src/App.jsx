import { useEffect, useContext } from "react";
import "./App.css";
import Routing from "./Router";
import { DataContext } from "./Components/DataProvider/DataProvider";
import { Type } from "./Utility/action.type";
import { auth } from "./Utility/firebase";

function App() {

  const [{ user }, dispatch] = useContext(DataContext);

// keep the state value even we refresh it, the user disapare only by signout.
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // on initial reander user lives only came from app.js not on the state. 
      if (authUser) {
        // console.log(authUser)
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        // You will write other codes
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
      <Routing/>
    </>
  );
}

export default App;
