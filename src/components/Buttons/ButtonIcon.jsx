import React from 'react';
import { ButtoIconStyled } from './ButtonIcon.style'
import PropTypes from 'prop-types';



const ButtonIcon = ({ icon: Icon = null, type, disabled, children, onClick, iconSize, primary }) => {
    return (
        <>
            <ButtoIconStyled
                primary={primary}
                type={type}
                disabled={disabled}
                onClick={onClick}
            >{Icon && <Icon size={iconSize} />}

                {children}
            </ButtoIconStyled>
        </>
    )
}

ButtonIcon.defaultProps = {
    onClick: () => null,
    children: null,
    // primary: null,
};

ButtonIcon.propTypes = {
    icon: PropTypes.func,
    type: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    children: PropTypes.string,
    onClick: PropTypes.func,
    iconSize: PropTypes.number
};

export default ButtonIcon;