import { createGlobalStyle } from 'styled-components';
import { modernNormalize } from 'styled-modern-normalize';

export const Normalize = createGlobalStyle`
  ${modernNormalize}
`;