import PropTypes from 'prop-types';
import * as Icons from 'react-icons/tb';

function DynamicIcon({ listIcons }) {
  const generatorIcon = (name) => {
    console.log('name', name);
    const IconComponent = Icons[name];

    if (!IconComponent) { // Return a default one
      return <Icons.TbCar />;
    }

    return <IconComponent />;
  };

  return (
    <>
      {listIcons.map((icon) => generatorIcon(icon))}
    </>
  );
}

DynamicIcon.propTypes = {
  listIcons: PropTypes.string.isRequired
};

export default DynamicIcon;
