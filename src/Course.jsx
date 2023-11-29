import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Card, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import Grid from '@mui/material/Grid';

function Course() {

    let { courseId } = useParams();
    const [courses, setCourses] = useState([]);
    const [isupdated, setIsUpdated] = useState(false);

    useEffect(() => {
        const handleAsyncOperation = async () => {
            let token = localStorage.getItem("token");
            const headers = {
                'Authorization': `Bearer ${token}`
            };
            try {
                const response = await axios.get("http://localhost:3001/admin/getCourses", { headers });
                setCourses(response.data);
            } catch(err) {
                console.log(err);
            }
        }
        handleAsyncOperation();

        // fetch("http://localhost:3001/admin/getCourses", {
        //     method: "GET",
        //     headers: {
        //         "Authorization": `Bearer ${token}`
        //     }
        // })
        // .then((response) => {
        //     if(!response.ok) {
        //         throw new Error("Network response was not okkk.");
        //     }
        //     return response.json();
        // })
        // .then((data) => {
        //     console.log("Setting data");
        //     setCourses(data);
        // })
        // .catch((err) => {
        //     console.log("Got error: ");
        //     console.log(err);
        // })
    }, [isupdated]);

    let course = null;
    for(let index = 0; index < courses.length; index++) {
        if(courses[index].id == courseId) {
            course = courses[index];
            break;
        }
    }

    if(!course) {
        return <div style={{height: "100vh", justifyContent: "center", flexDirection: "column"}}>
            Loading...
        </div>
    }

    return <div>
        <GreyTopper title={course.title}/>
        <Grid container>
            <Grid item lg={8} md={12} sm={12}>
                <UpdateCard course={course} setIsUpdated={setIsUpdated}/>
            </Grid>

            <Grid item lg={4} md={12} sm={12}>
                <CourseCard course={course}/>
            </Grid>
        </Grid>
    </div>
}

function GreyTopper({title}) {
    return <div style={{
        backgroundColor: "black",
        height: 250,
        top: 0,
        zIndex: 0,
        width: "100vw",
        marginBottom: -250
    }}>
        <div style={{ height: 250, display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <div>
                <Typography variant="h3" style={{color: "white", fontWeight: 600}} textAlign={"center"}>
                    {title}
                </Typography>
            </div>
        </div>
    </div>;
}

function UpdateCard(props) {
    const [title, setTitle] = useState(props.course.title);
    const [description, setDescription] = useState(props.course.description);
    const [imageLink, setImageLink] = useState(props.course.imageLink);
    const [price, setPrice] = useState(props.course.price);

    return <div style={{
        display: "flex",
        justifyContent: "center"
    }}>
        <Card 
            variant={"outlined"}
            style={{
                width: 600,
                marginTop: 200
            }
        }>
            <div style={{padding: 20}}>
                <Typography style={{marginBottom: 10}}>Update course details</Typography>
                <TextField 
                    style={{marginBottom: 10}}
                    onChange={(e) => {
                        setTitle(e.target.value);
                        props.setIsUpdated(false);
                    }}
                    defaultValue={props.course.title}
                    fullWidth={true}
                    id="outlined-basic" 
                    label="Title" 
                    variant="outlined"
                />

                <br/><br/>

                <TextField 
                    style={{marginBottom: 10}}
                    onChange={(e) => {
                        setDescription(e.target.value);
                        props.setIsUpdated(false);
                    }}
                    defaultValue={props.course.description}
                    fullWidth={true}
                    id="outlined-basic" 
                    label="Description" 
                    variant="outlined"
                />

                <br/><br/>

                <TextField 
                    style={{marginBottom: 10}}
                    onChange={(e) => {
                        setImageLink(e.target.value);
                        props.setIsUpdated(false);
                    }}
                    defaultValue={props.course.imageLink}
                    fullWidth={true}
                    id="outlined-basic" 
                    label="Image link" 
                    variant="outlined"
                />

                <br/><br/>

                <TextField 
                    style={{marginBottom: 10}}
                    onChange={(e) => {
                        setPrice(e.target.value);
                        props.setIsUpdated(false);
                    }}
                    fullWidth={true}
                    id="outlined-basic" 
                    label="price" 
                    variant="outlined"
                    defaultValue={props.course.price}
                />

                
                <br/><br/>

                <Button 
                    size={"medium"}
                    variant='contained'
                    onClick={async() => {
                        let token = localStorage.getItem("token");
                        let payload = {
                            title: title,
                            description: description,
                            imageLink: imageLink,
                            price: price
                        };

                        let headers = {
                            'Authorization': `Bearer ${token}`
                        };
                        try {
                            const response = await axios.put("http://localhost:3001/admin/courses/" + props.course.id, payload, {headers});
                            props.setIsUpdated(true);
                        } catch(err) {
                            console.log(err);
                        }
                        
                        // fetch("http://localhost:3001/admin/courses/" + props.course.id, {
                        //     method: "PUT",
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
                        //     props.setIsUpdated(true);
                        // })
                        // .catch((err) => {
                        //     console.log("Error is: ");
                        //     console.log(err);
                        // })
                    }}

                    >
                    Update-Course
                </Button>
            </div>
    </Card>
    </div>
}

function CourseCard(props) {
    return <div style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 50,
        width: "100%"
    }}>
        <Card variant={"outlined"} style={{
            margin: 10,
            width: 350,
            minHeight: 200,
            borderRadius: 20,
            marginRight: 50,
            paddingBottom: 15,
            zIndex: 2
        }}> 
            <img src={props.course.imageLink} style={{width: 350}}></img>
            <div style={{marginLeft: 10}}>
                <Typography variant="h5">{props.course.title}</Typography>
                <Typography variant={"subtitle2"} style={{color: "grey"}}>Price:</Typography>
                <Typography variant={"subtitle1"}>
                    <b>Rs.{props.course.price}/-</b>
                </Typography>
            </div>
            
        </Card>
    </div>
}

export default Course;