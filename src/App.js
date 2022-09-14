import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { useSelector } from './utility/WorkspaceContext';

import {
  lightTheme,
  darkTheme
} from './defaults/Colors';

import { GlobalStyled } from './globalStyled';
import Initial from './componets/Initial';
import RegisterUser from './componets/RegisterUser';
import Login from './componets/Login';
import Home from './componets/Home';
import EditProfile from './componets/EditProfile';
import UserSettings from './componets/UserSettings';

function App() {
  const isActiveDarkMode = useSelector(({ application }) => application.theme.darkMode);

  return (
    <ThemeProvider theme={isActiveDarkMode ? darkTheme : lightTheme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Initial />} />
          <Route path="register" element={<RegisterUser />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="user-settings" element={<UserSettings />} />
        </Routes>
        <GlobalStyled />
      </div>
    </ThemeProvider>
  );
}

export default App;
