import "./App.css";
import "./sass/main.scss";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Trend from "./pages/Trend";
import Subscriptions from "./pages/Subscriptions";
import Library from "./pages/Library";
import History from "./pages/History";
import WatchLater from "./pages/WatchLater";
import Favourites from "./pages/Favourites";
import Liked from "./pages/Liked";
import Music from "./pages/Music";
import Games from "./pages/Games";
import HomeDetail from "./components/HomeDetail";
import Search from "./pages/Search";
import Login from "./registration/Login";
import { createContext, useState } from "react";
import Register from "./registration/Register";
import ProtectedRoute from "./components/ProtectedRoute";



const AppContext = createContext({});

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isDark,
        setIsDark,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/home/:videoId" element={<HomeDetail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/trend" element={<Trend />} />
            <Route path="/subscription" element={<Subscriptions />} />
            <Route path="/library" 
            element={
              <ProtectedRoute>
                <Library/>
              </ProtectedRoute>
            } />
            <Route path="/history" element={<History />} />
            <Route path="/watch" element={<WatchLater />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/liked" element={<Liked />} />
            <Route path="/music" element={<Music />} />
            <Route path="/games" element={<Games />} />
            <Route path="*" element={<NotFound />} />
          </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>

        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
export {AppContext}