import PropTypes from 'prop-types';

// import { Link } from 'react-router-dom';
// import { BiCategoryAlt } from 'react-icons/bi';

import Button from '../../Button';

import {
  Container,
  List,
  CategoryContainer,
  ContainerIcon,
  CategoryLabel
} from './styles';

function ContentTab({ btnConfig, categories }) {
  return (
    <Container>
      <Button buttonConfig={btnConfig} />

      {categories?.map((category) => {
        console.log('category', category);

        return (
          <List key={category.id}>
            <CategoryContainer>
              <ContainerIcon>{category.icon}</ContainerIcon>
              <CategoryLabel>{category.title}</CategoryLabel>
            </CategoryContainer>
            <p>oi</p>
            <p>oi</p>
            <p>oi</p>
          </List>
        );
      })}
    </Container>
  );
}

// ContentTab.defaultProps = {
//   btnConfig: [],
//   hasFeedback: false
// };

ContentTab.propTypes = {
  btnConfig: PropTypes.shape({}).isRequired,
  categories: PropTypes.arrayOf().isRequired
};

export default ContentTab;
