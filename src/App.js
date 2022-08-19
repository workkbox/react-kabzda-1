import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs"
import News from "./components/News/News"

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";


const App = (props) => {

debugger

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>


                        <Route path="/dialogs/*" element={<Dialogs
                            dialogs={props.state.dialogsPage.dialogs}  messages={props.state.dialogsPage.messages}/>}/>
                        <Route path="/profile" element={<Profile
                            posts={props.state.profilePage.posts}/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/music" element={<Music/>}/>

                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
