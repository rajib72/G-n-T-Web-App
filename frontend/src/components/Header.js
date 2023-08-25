import React, { useState } from 'react'
import {AppBar, Box, Button, Tabs,Tab, Toolbar, Typography} from '@mui/material'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

const Header = () => {

  const [value,setValue]=useState()
  const isLoggedIn = useSelector(state=>state.isLoggedIn)

  return (
    <AppBar position='sticky' sx={{background:"#A73B87"}}>
        <Toolbar>
            <Typography variant='h4'>Gigs and Time</Typography>
          { isLoggedIn &&  <Box display="flex" marginLeft={"auto"} marginRight={"auto"}>
              <Tabs textColor='inherit' value={value} onChange={(e,val)=>setValue(val)}>
                <Tab LinkComponent={Link} to="/projects" label ="All Projects" />
                <Tab LinkComponent={Link} to="/myprojects" label ="My Projects" />
              </Tabs>
            </Box>}

            <Box display='flex' marginLeft="auto">
                { !isLoggedIn && <><Button LinkComponent={Link} to="/login" variant='contained' sx={{margin:1,borderRadius:10}} color="warning">Login</Button>
                <Button LinkComponent={Link} to="/login" variant='contained' sx={{margin:1,borderRadius:10}} color='warning'>Signup</Button></>}
                
                { isLoggedIn && <Button LinkComponent={Link} to="/login" variant='contained' sx={{margin:1,borderRadius:10}} color='warning'>Logout</Button>}
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header