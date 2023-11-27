import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Card, Typography, TextField, Button } from "@mui/material";

function Course() {

    let { courseId } = useParams();

    const [courses, setCourses] = useState([]);
    const [isupdated, setIsUpdated] = useState(false);

    useEffect(() => {
        let token = localStorage.getItem("token");
        fetch("http://localhost:3001/getCourses", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then((response) => {
            if(!response.ok) {
                throw new Error("Network response was not okkk.");
            }
            return response.json();
        })
        .then((data) => {
            setCourses(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [isupdated]);

    let course = null;
    for(let index = 0; index < courses.length; index++) {
        if(courses[index].id == courseId) {
            course = courses[index];
            break;
        }
    }

    if(!course) {
        return <div>
            Loading...
        </div>
    }

    return <div>
        <CourseCard course={course}/>
        <UpdateCard course={course} setIsUpdated={setIsUpdated}/>
    </div>
}

function UpdateCard(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageLink, setImageLink] = useState("");

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
                props.setIsUpdated(false);
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
                props.setIsUpdated(false);
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
                props.setIsUpdated(false);
            }}
            fullWidth={true}
            id="outlined-basic" 
            label="Image link" 
            variant="outlined"
        />

        <br/><br/>

        <Button 
            size={"medium"}
            variant='contained'
            onClick={() => {
                let curr = {
                    title: title,
                    description: description,
                    imageLink: imageLink
                };

                let token = localStorage.getItem("token");
                fetch("http://localhost:3001/courses/" + props.course.id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
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
                    // alert(`${data.title} added`);
                    props.setIsUpdated(true);
                })
                .catch((err) => {
                    console.log("Error is: ");
                    console.log(err);
                })
            }}

            >
            Update-Course
        </Button>
    </Card>
    </div>
}

function CourseCard(props) {
    return <div style={{
        display: "flex",
        justifyContent: "center"
    }}>
        <Card style={{
            minHeight: 200,
            margin: 10,
            width: 300
        }}>
            <Typography textAlign={"center"} variant={"h4"}>{props.course.title}</Typography>
            <Typography textAlign={"center"} variant={"subtitle1"}>{props.course.description}</Typography>
            <img src={props.course.imageLink} style={{width: 300}}></img>
        </Card>
    </div>
}

export default Course;