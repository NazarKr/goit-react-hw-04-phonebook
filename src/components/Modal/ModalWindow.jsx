import React, { Component } from 'react';
// import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalContent } from './ModalWindow.styled';

// const modalRoot = document.querySelector('#modal-root');

class ModalWindow extends Component {
    componentDidMount() {
        // console.log('Modal componentDidMount');
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        // console.log('Modal componentWillUnmount');
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            // console.log('Нажав ESC');
            this.props.onClose();
        }
    };

    handleBackdropClick = event => {
        // console.log('в бекдроп');
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    };

    render() {
        return (
            <ModalBackdrop onClick={this.handleBackdropClick}>
                <ModalContent>{this.props.children}</ModalContent>
            </ModalBackdrop>
        );
    }
};
 
export default ModalWindow;