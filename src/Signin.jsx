import './Signin.css';
import { Button, TextField, Card, Typography } from '@mui/material';

function Signin(props) {
    return <div>

            <div style={{
                paddingTop: 150,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center"
            }}>
                <Typography varient={"h5"}>
                    Welcome back to {props.courseName}. Sign-in below.
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
                        fullWidth={true}
                        id="outlined-basic" 
                        label="Email" 
                        variant="outlined"
                    />
                    <br/><br/>
                    <TextField 
                        fullWidth={true}
                        id="outlined-basic" 
                        label="Password" 
                        variant="outlined"
                        type={"password"}
                    />
                    <br/><br/>
                    <Button 
                        size={"large"}
                        variant='contained'>
                        Sign-in
                    </Button>

                </Card>
            </div>

    </div>
}

export default Signin;