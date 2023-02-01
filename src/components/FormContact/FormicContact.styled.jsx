import styled from 'styled-components';
import theme from 'theme';

export const FormContainer = styled.div`
    background-color: #fff;
    width: 80%;
    margin: 0 auto;
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: ${theme.radii.normal};
    box-shadow: 0px 0px 20px -20px;
        &:hover {
         /* box-shadow: ${theme.shadow.medium}; */
        }
`;

export const Label = styled.label`
    font-size: ${theme.fontSizes.s};
    font-weight: ${theme.fontWeights.regular};
        @media (min-width: 420px) {
       font-size: ${theme.fontSizes.m};
      }
`;

export const MyField = styled.input`
    padding: 10px;
    font-size: ${theme.fontSizes.xs};
    margin-bottom: 10px;
    border-radius: ${theme.radii.normal};
    border: 1px solid #ccc;
    box-shadow: 0px 0px 20px -20px;
    width: 100%;
                    @media (min-width: 420px) {
       font-size: ${theme.fontSizes.s};
      }
`;