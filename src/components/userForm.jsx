import React, { Component, createContext } from 'react';
import { UserDetails } from './userDetails';
import { PersonalDetails } from './personalDetails';
import { Confirm } from './confirm';
import { Success } from './success';

export const Prop = createContext();
export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    };
    // transform to the next step
    nextState = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };
    // transform to the previous step
    previousState = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };
    // handle the field state
    handleField = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };
    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values = [{ key: 'first name', value: firstName },
        { key: 'last name', value: lastName },
        { key: 'email', value: email },
        { key: 'occupation', value: occupation },
        { key: 'city', value: city },
        { key: 'bio', value: bio }];
        //const values = { firstName, lastName, email, occupation, city, bio };
        switch (step) {
            case 1:
                return (
                    <Prop.Provider value={{ firstName, lastName, email, handleField: this.handleField, nextState: this.nextState }}>
                        <UserDetails />
                    </Prop.Provider>
                )
            case 2:
                return (
                    <Prop.Provider value={{ occupation, city, bio, handleField: this.handleField, nextState: this.nextState, previousState: this.previousState }}>
                        <PersonalDetails />
                    </Prop.Provider>
                )
            case 3:
                return (
                    <Prop.Provider value={{ nextState: this.nextState, previousState: this.previousState, values }}>
                        <Confirm />
                    </Prop.Provider>
                )
            case 4:
                return (
                    <Prop.Provider value={{ firstName, lastName }}>
                        <Success />
                    </Prop.Provider>
                )
            default: break;
        }
    }
}

export default UserForm;
