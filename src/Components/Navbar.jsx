
import Box from '@mui/material/Box';
import { Container, Stack } from '@mui/system';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Skills from './Skills';
import Work from './Work';
import { Button, Grid } from '@mui/material';

function Navbar() {

  return (
        <div style = {{position:'fixed' , top : '0px' , left : '0px' , width : '100%', zIndex : '100'}}>
          <ul style= {{margin:'0px',padding:'2%',listStyleType:'none',display:'flex',justifyContent:'space-evenly',backgroundColor:'#edf2f8'}}>
                      <li>  <a href = "/" style = {{textDecoration:'none',fontSize:'24px' , fontFamily:'Dancing Script'}}> iamsarb_001  </a> </li>
                      <li>  <a href = "#home" style = {{textDecoration:'none' ,fontFamily:'Instrument Serif',fontSize:'20px'}}> HOME  </a> </li>
                      <li> <a href = "#about" style = {{textDecoration:'none' ,fontFamily:'Instrument Serif',fontSize:'20px'}}> About  </a>  </li>
                      <li> <a href = "#contact" style = {{textDecoration:'none' ,fontFamily:'Instrument Serif',fontSize:'20px'}}>  Contact  </a>  </li>
                      <li> <a href = "#skills" style = {{textDecoration:'none' ,fontFamily:'Instrument Serif',fontSize:'20px'}}> Skills  </a> </li>
                      <li> <a href = "#work" style = {{textDecoration:'none' ,fontFamily:'Instrument Serif',fontSize:'20px'}}> Work </a>  </li>
                      <li>  <a href = "" style = {{textDecoration:'none' ,fontFamily:'Instrument Serif',fontSize:'20px'}}> Resume </a> </li>
          </ul>
        </div>
  );
}
export default Navbar
