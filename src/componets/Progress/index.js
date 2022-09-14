import PropTypes from 'prop-types';
import { Progress as ProgressAntd } from 'antd';

import { Container } from './styles';

function Progress({ percent, status }) {
  return (
    <Container>
      <ProgressAntd percent={percent} status={status} />
    </Container>
  );
}

Progress.defaultProps = {
  percent: 0,
  status: null
};

Progress.propTypes = {
  percent: PropTypes.number,
  status: PropTypes.string
};

export default Progress;
