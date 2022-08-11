export const getRuleField = ({
  textMessage,
  isRequired
}) => ({
  required: isRequired,
  message: `O campo ${textMessage} é obrigatório`
});

export default {
  getRuleField
};
