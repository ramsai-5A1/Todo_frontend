import { Typography, Button } from "@mui/material";
import { red } from "@mui/material/colors";

function Appbar() {
    return <div style={{display: "flex",
        justifyContent: "space-between"}}
        >
        <div style={{backgroundColor: "red"}}>
            <Typography variant={"h6"}>Coursera</Typography>
        </div>

        <div style={{display: "flex"}}>
            <div style={{marginRight: 10}}>
                <Button variant={"contained"}>Sign-up</Button>
            </div>

            <div>
                <Button variant={"contained"}>Sign-in</Button>
            </div>
        </div>
    </div>
}

export default Appbar;