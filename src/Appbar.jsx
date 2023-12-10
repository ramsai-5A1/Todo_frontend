import { Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Appbar() {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState("OldOne");
    const [emailThere, setEmailThere] = useState(false);
    
    useEffect(() => {
        let token = localStorage.getItem("token");
        fetch("http://localhost:3001/admin/me", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then((response) => {
            if(!response.ok) {
                throw new Error('Network response was not okkk.');
            }
            return response.json();
        })
        .then((data) => {
            setUserEmail(data.userName);
            setEmailThere(true);
        })
        .catch((err) => {
            setEmailThere(false);
            setUserEmail("");
            console.log("ERROR WHILE ADMIN API");
            console.log(err);
        })
    }, []);

    return <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 4
        }}>
        <div style={{backgroundColor: ""}}>
            <Typography variant={"h6"}>Coursera</Typography>
        </div>
        

        <div style={{display: "flex"}}>
            {!emailThere && <div style={{marginRight: 10}}>
                <Button 
                    variant={"contained"}
                    onClick={() => {
                        //  window.location = "/signup"
                        navigate("/signup");
                    }}
                    >
                    Sign-up
                </Button>
            </div>}

            {!emailThere && <div>
                <Button 
                variant={"contained"}
                onClick={() => {
                    // window.location = "/login"
                    navigate("/login");
                }}
                >log-in
                </Button>
            </div>}

            {emailThere && <div style={{fontWeight: "bold", fontSize: 20}}>
                {userEmail}
            </div>}

            {<div style={{margin: 10}}></div>}

            {emailThere && <div>
                <Button 
                variant={"contained"}
                onClick={() => {
                    window.location = "/addcourse";
                }}
                >Add-Course
                </Button>
            </div>}

            {<div style={{margin: 10}}></div>}

            {emailThere && <div>
                <Button 
                variant={"contained"}
                onClick={() => {
                    window.location = "/courses";
                }}
                >Show courses
                </Button>
            </div>}

            {<div style={{margin: 10}}></div>}
            
            {emailThere && <div>
                <Button 
                variant={"contained"}
                onClick={() => {
                    localStorage.setItem("token", null);
                    setEmailThere(false);
                    setUserEmail("");
                    window.location = "/login";
                }}
                >Log-out
                </Button>
            </div>}

            {<div style={{margin: 10}}></div>}

        </div>
    </div>
}

export default Appbar;