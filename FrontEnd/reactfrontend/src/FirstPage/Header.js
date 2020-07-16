import React from 'react'
import './Header.css'
import {Navbar,Form,Button,FormControl} from 'react-bootstrap'; 

class Header extends React.Component 
{
    render()
    {
        return(
             <div className='cont1'>
               <div className='nav justify-content-end'>
                <button type="button" class="btn btn-secondary m-3">Data Query</button>
                <Navbar class="background-color" >
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                 </Navbar>
                </div>
            </div>

        )
    }
}

export default Header;