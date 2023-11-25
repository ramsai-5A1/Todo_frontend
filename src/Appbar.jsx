import { Typography, Button } from "@mui/material";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

function Appbar() {
    const navigate = useNavigate();

    return <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 4
        }}>
        <div style={{backgroundColor: ""}}>
            <Typography variant={"h6"}>Coursera</Typography>
        </div>

        <div style={{display: "flex"}}>
            <div style={{marginRight: 10}}>
                <Button 
                    variant={"contained"}
                    onClick={() => {
                        //  window.location = "/signup"
                        navigate("/signup");
                    }}
                    >
                    Sign-up
                </Button>
            </div>

            <div>
                <Button 
                variant={"contained"}
                onClick={() => {
                    // window.location = "/login"
                    navigate("/login");
                }}
                >Sign-in
                </Button>
            </div>
        </div>
    </div>
}

export default Appbar;