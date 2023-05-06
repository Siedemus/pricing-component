import { Header } from "./Header";
import { Switch } from "./Switch";
import { Offers } from "./Offers";
import { Background } from "./Background";
import { Footer } from "./Footer";
import { useState } from "react";

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleChecked = () => {
    setIsChecked((isChecked) => !isChecked);
  };

  return (
    <>
      <Header />
      <Switch toggleChecked={toggleChecked} isChecked={isChecked} />
      <Offers isChecked={isChecked} />
      <Background />
      <Footer />
    </>
  );
}

export default App;
