import React, { useState, useEffect, useContext } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import Context from "../../context";
import Grid from '@mui/material/Grid';
import Button from "@material-ui/core/Button";
import Box from '@mui/material/Box';
import { useStylesHeaderNavTitle } from './headerNavTitleStyle'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';

function NavBarRoute() {
    const { navBarRoute, setNavBarRoute } = useContext(Context);
    const classes = useStylesHeaderNavTitle();
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    return (
        <Box style={{ width: "100%" }}>
            <Grid className={classes.root}>
                <Grid className={classes.title}>
                    <span>{navBarRoute}</span>
                </Grid>
                <Grid className={classes.breadcrumbDiv}>
                    <Breadcrumbs aria-label="breadcrumb"  
                    className={classes.breadcrumb}
                    
                     separator=">">
                        <Link className={classes.link} to="/">
                            Home
                        </Link>
                        {pathnames.map((name, index) => {
                            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                            const isLast = index === pathnames.length - 1;
                            return isLast ? (
                                <Typography
                                    style={{
                                        color: "#fff",
                                        fontSize: "14px",
                                        fontFamily: "Montserrat, sans-se",
                                    }} key={name}>
                                    {name}
                                </Typography>
                            ) : (
                                <Link  style={{
                                    color: "#fff",
                                    fontSize: "14px",
                                    fontFamily: "Montserrat, sans-se",
                                }} to={routeTo} key={name}>
                                    {name}
                                </Link>
                            );
                        })}
                    </Breadcrumbs>
                </Grid>
            </Grid>
        </Box>
    )
}

export default NavBarRoute