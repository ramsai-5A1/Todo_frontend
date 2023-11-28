import { useEffect, useState } from "react";
import { Card, Typography } from "@mui/material";
import axios from "axios";

function Courses() {

     const [courses, setCourses] = useState([]);

    useEffect(() => {
        let token = localStorage.getItem("token");

        const callBackendAsyncManner = async () => {
            const headers = {
                "Authorization": `Bearer ${token}`
            }

            try {
                const response = await axios.get("http://localhost:3001/admin/getCourses", { headers });
                setCourses(response.data);
            } catch(err) {
                console.error(err);
            }
        }

        callBackendAsyncManner();
        // fetch("http://localhost:3001/admin/getCourses", {
        //     method: "GET",
        //     headers: {
        //         "Authorization": `Bearer ${token}`
        //     }
        // })
        // .then((response) => {
        //     if(!response.ok) {
        //         throw new Error('Network response was not okkk.');
        //     }
        //     return response.json();
        // }) 
        // .then((data) => {
        //     setCourses(data);
        // })
        // .catch((err) => {
        //     console.log(err);
        // });
    }, []);

    return <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {courses.map((course, index) => {
            return <div key={index}>
                <DisplayCourse course={course} />
            </div>
        })}
    </div>
}

function DisplayCourse(props) {
    return <Card style={{
        minHeight: 200,
        margin: 10,
        width: 300
    }}>
        <Typography textAlign={"center"} variant={"h4"}>{props.course.title}</Typography>
        <Typography textAlign={"center"} variant={"subtitle1"}>{props.course.description}</Typography>
        <img src={props.course.imageLink} style={{width: 300}}></img>
    </Card>
}

export default Courses;