import Button from '../Button';

import {
  BTN_SIGN_IN,
  BTN_SIGN_UP
} from '../../defaults/components/ButtonType';

import {
  Container,
  DescriptionContainer,
  Description,
  GetStarted
} from './styles';

function Initial() {
  return (
    <Container>
      <DescriptionContainer>
        <Description>
          Breve descrição sobre o que é o produto brabrbarbabr brabrab brabrab
        </Description>
      </DescriptionContainer>

      <GetStarted>
        <Button buttonConfig={BTN_SIGN_IN} />
        <Button buttonConfig={BTN_SIGN_UP} />
      </GetStarted>
    </Container>
  );
}

export default Initial;
