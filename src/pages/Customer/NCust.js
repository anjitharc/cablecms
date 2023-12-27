import React, { useEffect, useState } from "react";
import { useAsyncError, useNavigate } from "react-router-dom";
import { Url } from "../../Global";
import { FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField } from "@material-ui/core";
import Controls from "../../components/controls/Controls";



export default function NCust(props) {

    const { addOrEdit, recordForEdit } = props

    const [name, namechange] = useState("");
    const [address, addresschange] = useState("");
    const [mobile, mobilechange] = useState("");
    const [leadThrough, leadThroughchange] = useState("");
    const [staffId, staffIdchange] = useState("");
    const [type, typechange] = useState("");
    const [leadCategory, leadCategorychnge] = useState("");
    const navigate = useNavigate();
    
    const [crfNumber, crfNumberchange] = useState("");

    const [phone, phonechange] = useState("");
    const [email, emailchange] = useState("");
    const [firstName, firstNamechange] = useState("");
    const [middleName, middleNamechange] = useState("");
    const [lastName, lastNamechnge] = useState("");
    const [gender, genderchnge] = useState("");
    const [userId, userIdchnge] = useState("");
    const [color, setColor] = useState("");

    const styles = theme => ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing.unit,
            marginRight: theme.spacing.unit,
            width: 200,
        },
        dense: {
            marginTop: 19,
        },
        menu: {
            width: 200,
        },
    });


    const handlesubmit = (e) => {
        e.preventDefault();
        const custdta = {
            address,
            crfNumber,
            email,
            firstName,
            middleName,
            lastName,
            gender,
            phone,
            userId,
        };
        fetch(Url + "customer", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(custdta),
        })
            .then((res) => {
                alert("Saved Successfully");
                window.location.reload(false);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    const [staffdtls, staffdtlschange] = useState(null);
    useEffect(() => {
        fetch(Url + "staff")
            .then((res) => {
                return res.json();
            })
            .then((resp) => {
                staffdtlschange(resp.data);


            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div>

            <form validate required onSubmit={handlesubmit}  >
                <Grid container>

                    <Grid item xs={3} >

                        <TextField
                            id="standard-name"
                            label="CRF Number"
                            margin="normal"
                            required onChange={(e) =>
                                crfNumberchange(e.target.value)}
                        /> &nbsp;&nbsp;
                        <TextField
                            id="standard-name"
                            label="First Name"
                            margin="normal"
                            required onChange={(e) =>
                                firstNamechange(e.target.value)}
                        /> &nbsp;&nbsp;
                        <TextField
                            id="standard-name"
                            label="Address"
                            margin="normal"
                            required onChange={(e)=> 
                                addresschange(e.target.value) }
                        /> &nbsp;&nbsp; </Grid>
                    <Grid item xs={3}>
                        <TextField
                            id="standard-name"
                            label="Mobile"
                            type="number"
                            margin="normal"
                            required onChange={(e) =>
                                phonechange(e.target.value)}
                        /> &nbsp;&nbsp;  <TextField
                            id="standard-name"
                            label="Middle Name"
                            margin="normal"
                            required onChange={(e) =>
                                middleNamechange(e.target.value)}
                        /> &nbsp;&nbsp;
                        <br></br> <br></br>

                        <FormControl
                            sx={{
                                marginTop: 35,
                                width: 50
                            }} fullWidth>
                            <InputLabel shrink>Area</InputLabel>
                            <Select label={color ? "Color" : ""}
                                sx={{
                                    marginTop: 35,
                                    width: 500,
                                    height: 50,
                                }}
                            >
                                <MenuItem value={1}>T1</MenuItem>
                                <MenuItem value={2}>T2</MenuItem>
                                <MenuItem value={3}>T3</MenuItem>
                                <MenuItem value={4}>T4</MenuItem>
                                <MenuItem value={5}>T5</MenuItem>
                            </Select>
                        </FormControl>

                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            id="standard-name"
                            label="E-Mail"
                            type="email"
                            margin="normal"
                            required onChange={(e)=> 
                                emailchange(e.target.value) }
                        /> &nbsp;&nbsp;  <TextField
                            id="standard-name"
                            label="Last Name"
                            margin="normal"
                            required onChange={(e) =>
                                lastNamechnge(e.target.value)}
                        /> &nbsp;&nbsp;



                    </Grid>
                    <Grid item xs={3} alignItems="flex-start">

                        <br></br><br></br><br></br><br></br>
                        <Controls.Button text="Submit" type="submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                        />

                    </Grid>
                </Grid>
            </form>

        </div>


    );
};

