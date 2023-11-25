import { Button, TextField, Card } from "@mui/material";
import { useState } from "react";

function AddCourse() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div style={{
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
                setTitle(e.target.value);
            }}
            fullWidth={true}
            id="outlined-basic" 
            label="Title" 
            variant="outlined"
        />

        <br/><br/>

        <TextField 
            onChange={(e) => {
                setDescription(e.target.value);
            }}
            fullWidth={true}
            id="outlined-basic" 
            label="Description" 
            variant="outlined"
        />

        <br/><br/>

        <Button 
            size={"medium"}
            variant='contained'
            onClick={() => {
                console.log(`title is: ${title}`);
                console.log(`description is: ${description}`);
            }}

            >
            Add-Course
        </Button>
    </Card>

    </div>
}

export default AddCourse;