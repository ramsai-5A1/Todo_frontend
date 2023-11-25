import './Signup.css';
import { Button, TextField, Card } from '@mui/material';

function Signup(props) {
    return <div>

        <center>
            <div style={{
                marginTop: 200,
                marginBottom: 10
            }}>
                Welcome to {props.courseName}. Signup below.
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