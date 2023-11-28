import { Button, TextField, Card } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function AddCourse() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageLink, setImageLink] = useState("");
    const [price, setPrice] = useState(0);

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

        <TextField 
            onChange={(e) => {
                setImageLink(e.target.value);
            }}
            fullWidth={true}
            id="outlined-basic" 
            label="Image link" 
            variant="outlined"
        />

        <br/><br/>

        <TextField 
            onChange={(e) => {
                setPrice(e.target.value);
            }}
            fullWidth={true}
            id="outlined-basic" 
            label="price" 
            variant="outlined"
        />

        <br/><br/>

        <Button 
            size={"medium"}
            variant='contained'
            onClick={async() => {
                let payload = {
                    title: title,
                    description: description,
                    imageLink: imageLink,
                    price: price
                };

                let token = localStorage.getItem("token");
                const headers = {
                    'Authorization': `Bearer ${token}`
                };

                const response = await axios.post("http://localhost:3001/admin/addcourse", payload, { headers });
                let data = response.data;
                const dataString = JSON.stringify(data);
                alert(`${data.title} added`);

                // fetch("http://localhost:3001/admin/addcourse", {
                //     method: "POST",
                //     headers: {
                //         "Content-Type": "application/json",
                //         "Authorization": `Bearer ${token}`
                //     },
                //     body: JSON.stringify(curr)
                // })
                // .then((response) => {
                //     if (!response.ok) {
                //         throw new Error('Network response was not ok.');
                //     }
                //     return response.json();
                // })
                // .then((data) => {
                //     const dataString = JSON.stringify(data);
                //     alert(`${data.title} added`);
                // })
                // .catch((err) => {
                //     console.log("Error is: ");
                //     console.log(err);
                // })
            }}

            >
            Add-Course
        </Button>
    </Card>

    </div>
}

export default AddCourse;