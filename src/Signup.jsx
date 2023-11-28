import './Signup.css';
import { Button, TextField, Card, Typography } from '@mui/material';
import { useState } from 'react';

function Signup(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return <div>

            <div style={{
                paddingTop: 150,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center"
            }}>
                <Typography varient={"h5"}>
                    Welcome to {props.courseName}. Signup below.
                </Typography>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <Card 
                    variant={"outlined"}
                    style={{
                        width: 400, 
                        padding: 20
                    }}>

                    <TextField 
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        fullWidth={true}
                        id="outlined-basic" 
                        label="Email" 
                        variant="outlined"
                    />
                    <br/><br/>
                    <TextField 
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        fullWidth={true}
                        id="outlined-basic" 
                        label="Password" 
                        variant="outlined"
                        type={"password"}
                    />
                    <br/><br/>
                    <Button 
                        onClick={() => {
                            let curr = {
                                userName: email,
                                password: password
                            };

                            fetch("http://localhost:3001/user/signup", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(curr)
                            })
                            .then((response) => {
                                if (!response.ok) {
                                    throw new Error('Network response was not ok.');
                                }
                                return response.json();
                            })
                            .then((data) => {
                                let token = data.token;
                                localStorage.setItem("token", token);
                                window.location = "/addcourse";
                            })
                            .catch((err) => {
                                console.log("Error is: ");
                                console.log(err);
                            })
                        }}
                        size={"large"}
                        variant='contained'>
                        Sign up
                    </Button>

                </Card>
            </div>

    </div>
}

export default Signup;