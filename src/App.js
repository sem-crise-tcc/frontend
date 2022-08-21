import { Routes, Route } from 'react-router-dom';

import Initial from './componets/Initial';
import RegisterUser from './componets/RegisterUser';
import Login from './componets/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="register" element={<RegisterUser />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
