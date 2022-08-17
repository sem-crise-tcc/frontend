import PropTypes from 'prop-types';

import {
  Container, CircleIcon, Text
} from './styles';

function RulePassword({ icon, text }) {
  return (
    <Container>
      <CircleIcon>
        {icon}
      </CircleIcon>
      <Text>{text}</Text>
    </Container>
  );
}

RulePassword.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired
};

export default RulePassword;
