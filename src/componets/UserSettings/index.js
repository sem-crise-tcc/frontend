// import PropTypes from 'prop-types';
import Switch from 'react-switch';
import { useCallback } from 'react';
import { RiUserSettingsLine } from 'react-icons/ri';
import { BsSun } from 'react-icons/bs';
import { MdOutlineDarkMode } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';

import { BTN_SETTINGS_OPTION_OPEN } from '../../defaults/components/ButtonType';
import { PRIMARY_COLOR, BLUE_LIGHT } from '../../defaults/Colors';

import { useDispatch, useSelector } from '../../utility/WorkspaceContext';

import { activeDarkMode } from '../../ducks/ApplicationDucks/Theme';

import Header from '../Header';
import Button from '../Button';
import Progress from '../Progress';
import SettingOption from './SettingOption';
import ProgressCourse from './ProgressCourse';

import {
  Container
} from './styles';

function UserSetting() {
  const dispatch = useDispatch();

  const callActiveDarkMode = useCallback(
    (isActive) => dispatch(activeDarkMode(isActive)),
    [dispatch]
  );

  const isActiveDarkMode = useSelector(({ application }) => application.theme.darkMode);

  return (
    <>
      <Header title="Configurações" backPageLink="home" />
      <Container>
        <h3>Perfil</h3>
        <SettingOption
          icon={<RiUserSettingsLine />}
          title="Anna"
          subTitle="Informações pessoais"
          button={(
            <Button
              buttonConfig={BTN_SETTINGS_OPTION_OPEN}
            />
          )}
          buttonRedirect="edit-profile"
        />

        <h3>Seu progresso</h3>
        <ProgressCourse
          title="Curso 1º iniciante"
          btn={BTN_SETTINGS_OPTION_OPEN}
          progress={<Progress percent={10} status="exception" />}
        />
        <ProgressCourse
          title="Curso 2º iniciante"
          btn={BTN_SETTINGS_OPTION_OPEN}
          progress={<Progress percent={50} status="success" />}
        />
        <ProgressCourse
          title="Curso 3º iniciante"
          btn={BTN_SETTINGS_OPTION_OPEN}
          progress={<Progress percent={90} status="active" />}
        />

        <h3>Configurações</h3>
        <SettingOption
          icon={isActiveDarkMode ? <MdOutlineDarkMode /> : <BsSun />}
          title="Tema"
          subTitle={isActiveDarkMode ? 'Tema escuro' : 'Tema claro'}
          btnSwitch={(
            <Switch
              checkedIcon={false}
              offColor="#dbdbdb"
              onColor={BLUE_LIGHT}
              onHandleColor={PRIMARY_COLOR}
              uncheckedIcon={false}
              onChange={() => callActiveDarkMode(!isActiveDarkMode)}
              checked={isActiveDarkMode}
            />
          )}
        />
        <SettingOption
          icon={<FiLogOut />}
          title="Encerrar sessão"
        />
      </Container>
    </>
  );
}

// UserSettings.propTypes = {
//   title: PropTypes.string.isRequired,
//   backPageLink: PropTypes.string.isRequired
// };

export default UserSetting;
