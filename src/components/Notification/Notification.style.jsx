import styled from 'styled-components';
import theme from 'theme'

export const NotificationText = styled.h2`
    margin-top: 32px;
    margin-bottom: 4px;
    font-size: ${theme.fontSizes.s};

 @media (min-width: 420px) {
       font-size: ${theme.fontSizes.l};
      }
`