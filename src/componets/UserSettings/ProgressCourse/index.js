import PropTypes from 'prop-types';

import Button from '../../Button';

import { ContainerOption } from '../styles';
import { OptionInfo } from './styles';

function ProgressCourse({ title, btn, progress }) {
  return (
    <ContainerOption>
      <OptionInfo>
        <strong>{title}</strong>
        {progress}
      </OptionInfo>
      <Button buttonConfig={btn} />
    </ContainerOption>
  );
}

ProgressCourse.propTypes = {
  title: PropTypes.string.isRequired,
  btn: PropTypes.element.isRequired,
  progress: PropTypes.element.isRequired
};

export default ProgressCourse;
