import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CustomTable from "./Table/Table";
import type { AppDispatch } from "./app/store";
import { onJmixEvent } from "./bridge/jmixBus";
import { eventReceived } from "./bridge/jmixSlice";
import "./index.css";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    return onJmixEvent((msg) => dispatch(eventReceived(msg)));
  }, [dispatch]);

  return <CustomTable />;
}

export default App;
