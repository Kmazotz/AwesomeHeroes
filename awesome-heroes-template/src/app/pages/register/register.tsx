import "@rmwc/textfield/styles"
import "@rmwc/grid/styles"
import "@rmwc/button/styles"
import "./register.sass"

import React from "react"
import { Link } from "react-router-dom"

import { TextField } from "@rmwc/textfield"
import { Grid, GridRow, GridCell } from "@rmwc/grid"
import { Button } from "@rmwc/button"

const Register : React.FC = () =>
{
    return (
        <React.Fragment>
            <section className="mt-register--bg">
                <Grid className="mt-register-form">
                    <GridRow>
                        <GridCell desktop={12} phone={12} tablet={12}>
                            <h1>Register</h1>
                        </GridCell>

                        <GridCell desktop={6} phone={12} tablet={12}>
                            <TextField outlined label="Username" className="mt-input-field"/>
                        </GridCell>

                        <GridCell desktop={6} phone={12} tablet={12}>
                            <TextField outlined label="Real Name" className="mt-input-field"/>
                        </GridCell>

                        <GridCell desktop={12} phone={12} tablet={12}>
                            <TextField outlined label="Email" type="mail" className=" mt-input-field mt-input--fullWidth"/>
                        </GridCell>                       

                        <GridCell desktop={6} phone={12} tablet={12}>
                            <TextField outlined label="Password" type="password" className="mt-input-field"/>
                        </GridCell>

                        <GridCell desktop={6} phone={12} tablet={12}>
                            <TextField outlined label="Repeat password" type="password" className="mt-input-field"/>
                        </GridCell>

                        <GridCell desktop={12} phone={12} tablet={12}>
                            <div className="mt-form-captcha">
                                <span>¡Captcha!</span>
                            </div>                            
                        </GridCell>

                        <GridCell desktop={12} phone={12} tablet={12}>
                            <Button label="Register" unelevated/>
                        </GridCell>

                        <GridCell span={12}>
                            <p>You Already have an account? <Link to="/Login">Login</Link></p>
                        </GridCell>
                    </GridRow>
                </Grid>
            </section>
        </React.Fragment>
    )
}
export { Register }