import axios from "axios";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button, Form, Input, Label } from "semantic-ui-react";

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState(false);

    function submit(e) {
        e.preventDefault();
        axios.post('https://httpbin.org/post', {email, password});
        setEmail('');
        setPassword('');
        setStatus(true);
        setTimeout(()=>setStatus(false), 3000);
        props.callback(true, email);
    }

    return (
        <Form onSubmit={submit}>
            <Input type='email' size='mini' onChange={e => setEmail(e.target.value)} value={email} />
            <Input type='password' size='mini' onChange={e => setPassword(e.target.value)} value={password} />
            <Button size='mini' type='submit'>Submit</Button>
            <br />
            <Label style={{display: status?'inline':'none'}}>Success!</Label>
        </Form>
    );
}

Login.propTypes = {
    callback: PropTypes.func
};

export default Login;