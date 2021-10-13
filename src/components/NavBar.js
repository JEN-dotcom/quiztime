import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Toolbar, Typography} from '@material-ui/core'

const styles = makeStyles({
    bar:{
        paddingTop: '1.15rem',
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: {
            flexDirection: "column"
        }
    },
    menuItem: {
        cursor: "pointer",
        flexGrow: 1,
        "&:hover": {
            color: "#28c75d"
        },
        ['@media (max-width:780px)']: {
            paddingBottom: '1rem'
        }
    }
})

function NavBar({general, science}) {
    const classes = styles()

    return (
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>
            <Typography variant="h6" className={classes.menuItem} onClick={(e) => {general("general")}}>
                General Knowledge
            </Typography>
            <Typography variant="h6" className={classes.menuItem} onClick={() => {science("science")}}>
                Science
            </Typography>
        </Toolbar>        
    )
}

export default NavBar