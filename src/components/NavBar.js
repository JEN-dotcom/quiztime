import {Toolbar, Typography} from '@mui/material'

function NavBar({general, science}) {
    return (
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className="bar">
            <Typography variant="h6" className="menu-item" onClick={() => {general("general")}}>
                General Knowledge
            </Typography>

            <Typography variant="h6" className="menu-item" onClick={() => {science("science")}}>
                Science
            </Typography>
        </Toolbar>        
    );
};

export default NavBar