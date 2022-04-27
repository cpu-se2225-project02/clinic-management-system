import React, {useState} from 'react';
import { Button, Form } from 'semantic-ui-react'
import { useMutation} from '@apollo/react-hooks'
import gql from 'graphql-tag'

function Register() {
    const [values, setValues] = useState({
        username: '',
        password: '',
        email: '',
        confirmPassword: '',
    })

    
    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value});  
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addUser()
    }

    const [addUser, {loading}] = useMutation(REGISTER_USER, {
        update(result){
            console.log(result)
        },
        variable: values
    })
    return (
        <div>
            <Form onSubmit = {onSubmit} noValidate>
                <h1>Register</h1>
                <Form.Input
                    label = "username"
                    placeholder = "Username..."
                    name = "username"
                    value = {values.username}
                    onChange = {onChange}
                /> 

                <Form.Input
                    label = "email"
                    placeholder = "Email.."
                    name = "email"
                    value = {values.email}
                    onChange = {onChange}
                />

                <Form.Input
                    label = "password"
                    placeholder = "Password..."
                    name = "password"
                    value = {values.password}
                    onChange = {onChange}
                />

                <Form.Input
                    label = "confirmPassword"
                    placeholder = "Confirm Password..."
                    name = "confirmPassowrd"
                    value = {values.confirmPassword}
                    onChange = {onChange}
                />

                <Button type="submit" primary>
                    Register
                </Button>
            </Form>
        </div>
    );
}

const REGISTER_USER = gql`
    mutation register(
        $username: String!
        $email: String!
        $password: String!
        $confirmPassword: String!
    ) {
        register(
            registerInput: {
                username: $username
                email: $email
                password: $password
                confirmPassword: $confirmPassword  
            }
        )
    }
`

export default Register;




























