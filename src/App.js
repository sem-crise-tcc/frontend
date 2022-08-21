import { Routes, Route } from 'react-router-dom';

import Initial from './componets/Initial';
import RegisterUser from './componets/RegisterUser';
import Login from './componets/Login';
import Home from './componets/Home';
import EditProfile from './componets/EditProfile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="register" element={<RegisterUser />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="edit-profile" element={<EditProfile />} />
      </Routes>
    </div>
  );
}

export default App;
