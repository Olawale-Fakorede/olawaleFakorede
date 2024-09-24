
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Tools from "./components/Tools";
import Skills from "./components/Skills";


function App() {

    const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode && "dark"}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>

        <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <Hero/>
            <Tools/>
            <Skills/>
            <Services />
        </main>
    </div>
  );
}

export default App;
