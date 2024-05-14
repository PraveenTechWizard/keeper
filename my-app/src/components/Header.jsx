import React from "react";
import ChecklistIcon from '@mui/icons-material/Checklist';

function Header(){
    return(
        <nav className="navigation">
            <h1 className="nav-title"> <ChecklistIcon/> Keeper</h1>
        </nav>
    )
}

export default Header