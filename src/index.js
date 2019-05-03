import React from 'react';
import styled from 'styled-components';
import eventEmitter from 'event-emitter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faExclamationTriangle, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faCheckCircle, faExclamationTriangle, faTimes);

const Container = styled.div`
    background-color: ${props => props.type === "success" ? "#007f00" : props.type === "warning" ? "#F5A623" : "#C41818"};
    color: white;
    padding: 16px;
    font-size: 15px;
    position: fixed;
    top: ${props => props.top}px;
    right: 16px;
    z-index: 9999;
    transition: top 0.5s ease;
    border-radius: 5px;
    &>span {
        margin-right: 15px;
    }
`;

const CloseIcon = styled.span`
    cursor: pointer;
    margin-left: 15px;
`

const emitter = new eventEmitter();

export const notifier = ({ message, autoDismissTimeout = 4000, type }) => {
    emitter.emit('notification', message, autoDismissTimeout, type);
}

export default class Notifications extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            top: -500,
            message: "",
            type: "",
            autoDismissTimeout: 0
        }

        this.timeout = null;

        emitter.on('notification', (message, autoDismissTimeout, type) => {
            this.onShow(message, autoDismissTimeout, type);
        });
    }

    onShow = (message, autoDismissTimeout, type) => {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.setState({
                top: -500
            }, () => {
                this.timeout = setTimeout(() => {
                    this.showNotification(message, autoDismissTimeout, type);
                }, 500);
            });
        } else {
            this.showNotification(message, autoDismissTimeout, type);
        }
    }

    showNotification = (message, autoDismissTimeout, type) => {
        this.setState({
            top: 16,
            message: message,
            type: type,
            autoDismissTimeout: autoDismissTimeout
        }, () => {
            this.timeout = setTimeout(() => {
                this.setState({
                    top: -500
                });
            }, this.state.autoDismissTimeout);
        });
    }

    onClose = () => {
        this.setState({
            top: -500
        });
    }

    render() {
        return (
            <Container top={this.state.top} type={this.state.type}>
                {
                    this.state.type === "success" ?
                        <span><FontAwesomeIcon icon={faCheckCircle} /></span>
                        : <span><FontAwesomeIcon icon={faExclamationTriangle} /></span>
                }

                {this.state.message}
                <CloseIcon onClick={this.onClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </CloseIcon>
            </Container>
        );
    }
}