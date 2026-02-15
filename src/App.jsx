import { useIsTouchDevice } from "./hooks/useIsTouchDevice";
import "./App.css";

function App() {
  const isTouch = useIsTouchDevice();

  if (isTouch) {
    document.body.className = "";
    document.body.classList.add("touch-device");
  } else {
    document.body.className = "";
    document.body.classList.add("pc-device");
  }

  return (
    <>
      <h1>Каталог автоуслуг </h1>
    </>
  );
}

export default App;
