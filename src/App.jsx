import "./App.scss";
import Navbar from "@/components/navbar/Navbar.jsx";
import Sidebar from "@/components/sidebar/Sidebar.jsx";
import Home from "@/pages/home/Home.jsx";

/**
 * The App component returns a div element with the id "app" and class "app", containing a Navbar and
 * Sidebar component.
 * @returns The App component is returning a JSX element. The JSX element is a div with the id "app"
 * and the className "app". Inside the div, there are two components being rendered: Navbar and
 * Sidebar.
 */
const App = () => {
  return (
    <div id="app" className="app">
      <div className="app__container">
        <Navbar />
        <div className="main">
          <Sidebar />
          <main className="main__pages">
            <Home />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
