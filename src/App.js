import { Routes, Route } from 'react-router-dom';

import Initial from './componets/Initial';
import RegisterUser from './componets/RegisterUser';
import Login from './componets/Login';
import Home from './componets/Home';
import './App.less';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="register" element={<RegisterUser />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
