import styled from 'styled-components';
import theme from 'theme';
import { FaSearch } from 'react-icons/fa';

export const FilterContainer = styled.div`
    background-color: #fff;
    width: 80%;
    margin: 0 auto;
    padding: 6px 20px;
    border: 1px solid #ccc;
    border-radius: ${theme.radii.normal};
    box-shadow: 0px 0px 20px -20px;
        &:hover {
         box-shadow: ${theme.shadow.medium};
        }
`;

export const FilterLabel = styled.label`
    position: relative;

    font-size: ${theme.fontSizes.s};
    font-weight: ${theme.fontWeights.regular};;
            @media (min-width: 420px) {
       font-size: ${theme.fontSizes.m};
      }
`;

export const FilterField = styled.input`
    width: 50%;
    padding: 10px;
    padding-left: 35px;
    font-size: ${theme.fontSizes.xs};
    border-radius: ${theme.radii.normal};
    border: 1px solid #ccc;
    box-shadow: 0px 0px 20px -20px;
    width: 100%;
                @media (min-width: 420px) {
       font-size: ${theme.fontSizes.s};
      }
`;

export const SearchIcon = styled(FaSearch)`
    position: absolute;
    top: 65%;
    left: 15px;
    transform: translateY(-50%);
    color: #ccc;
`;