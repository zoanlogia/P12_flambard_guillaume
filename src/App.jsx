// App.js

import "@/App.scss";
import Navbar from "@/components/navbar/Navbar.jsx";
import Sidebar from "@/components/sidebar/Sidebar.jsx";
import Home from "@/pages/home/Home.jsx";
import { useUserData } from "@/hooks/useUserData";
import Loader from "@/components/loader/Loader.jsx";

const App = () => {
  const userData = useUserData();

  if (!userData) {
    return <Loader />;
  }

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
