import React from 'react';

import {
  TbLetterCaseUpper,
  TbLetterCaseLower,
  TbNumbers,
  TbLetterSpacing,
  TbHash
} from 'react-icons/tb';

export const RULE_PASSWORD_TYPES = [
  {
    icon: <TbLetterCaseUpper />,
    text: 'Uma letra maiúscula.'
  },
  {
    icon: <TbLetterCaseLower />,
    text: 'Uma letra minúscula.'
  },
  {
    icon: <TbNumbers />,
    text: 'Um número.'
  },
  {
    icon: <TbLetterSpacing />,
    text: 'Uma caracter especial.'
  },
  {
    icon: <TbHash />,
    text: 'Entre 8 a 60 caracteres.'
  }
];

export const RULE_PASSWORD_TYPE_UPPERCASE = {
  icon: <TbLetterCaseUpper />,
  text: 'Uma letra maiúscula.'
};

export const RULE_PASSWORD_TYPE_LOWERCASE = {
  icon: <TbLetterCaseLower />,
  text: 'Uma letra minúscula.'
};

export const RULE_PASSWORD_TYPE_NUMBER = {
  icon: <TbNumbers />,
  text: 'Um número.'
};

export const RULE_PASSWORD_TYPE_SPECIAL_CHARACTER = {
  icon: <TbLetterSpacing />,
  text: 'Uma caracter especial.'
};

export const RULE_PASSWORD_TYPE_MAX_AND_MIN_CHARACTER = {
  icon: <TbHash />,
  text: 'Entre 8 a 60 caracteres.'
};
