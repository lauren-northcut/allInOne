import CRUD from '../section/crud';
import Data from '../section/data';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import './style/index.css'
const { useState, useEffect } = require("react");
const Landing = () => {
    return (
        <div>
                 <ButtonGroup variant="text" aria-label="text button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
            <div className='content'>
                Content here

                <div><h1>Landing Page Rendering </h1></div>

      <CRUD/>
      <Data/>
               
            </div>
          
         
        </div>
    )
}

export default Landing;