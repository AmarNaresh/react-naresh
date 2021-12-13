import react from 'react';

import classes from './Topbar.module.css';

 const Topbar = (props) => {
    return (
        <header>
           <nav className={classes.Topbar}>
             <h1>A M A Z O N</h1>
           </nav>
         </header>
    );
 }
 export default Topbar;