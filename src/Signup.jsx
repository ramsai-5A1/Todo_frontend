import './Signup.css';
import { Button, TextField, Card, Typography } from '@mui/material';

function Signup(props) {
    return <div>

        <center>
            <div style={{
                paddingTop: 150,
                marginBottom: 10
            }}>
                <Typography varient={"h5"}>
                    Welcome to {props.courseName}. Signup below.
                </Typography>
            </div>
        </center>

        <center>
            <Card 
                variant={"outlined"}
                style={{width: 400, padding: 20}}
            >

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
                    Sign up
                </Button>

            </Card>
        </center>

    </div>
}

export default Signup;