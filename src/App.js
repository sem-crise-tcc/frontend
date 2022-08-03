import { Routes, Route } from 'react-router-dom';

import Initial from './componets/Initial';
import Register from './componets/Register';
import Login from './componets/Login';
import './App.less';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
