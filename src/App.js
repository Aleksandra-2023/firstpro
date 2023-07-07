import "./App.css";
import Header from "./components/h/Header/Header";
import Navbar from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <Navbar state={props.state.sidebar.friends} />
        <div class="App-wrapper-content">
          <Routes>
            <Route
              path="/dialogs"
              element={
                <Dialogs
                  dialogs={props.state.messagePage.dialogs}
                  messages={props.state.messagePage.messages}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  posts={props.state.profilePage.posts}
                  addPost={props.addPost}
                />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route
              path="/sidebar"
              // element={<Sidebar friends={props.state.sidebar.friends} />}
              element={<Sidebar />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
