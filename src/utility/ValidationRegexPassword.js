export const validationRegexPassword = (value) => {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#.?!,])[0-9a-zA-Z$*&@#.?!,]{8,}$/;

  if (!regex.exec(value)) {
    return Promise.reject(
      new Error(
        'A senha deve ter pelo menos 8 caracteres. Deve conter letras maiúsculas e minusculas, números e caracteres especiais.'
      )
    );
  }
  return Promise.resolve();
};

export default { validationRegexPassword };
