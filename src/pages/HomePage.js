import React from 'react'
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';

function HomePage() {
    return (
        <div>
            <Box m={1} display='flex' justifyContent="center">
                <img style={{imageRendering: 'crisp-edges'}} src="/Star_Wars_Yellow_Logo.svg" alt="Logo" />
            </Box>

            <Box m={2} display='flex' flexDirection='row' justifyContent="center">

                <Box mr={1}>
                <FormControl>
                    <InputLabel htmlFor="component-helper">Person ID</InputLabel>
                    <Input
                    id="component-helper"
                    aria-describedby="component-helper-text"
                    />
                    <FormHelperText id="component-helper-text">Search Character By ID</FormHelperText>
                </FormControl>
                </Box>
                
                <Box display='flex' flexDirection="column" justifyContent='center'>
                <Button variant="outlined" style={{display: 'block', margin: '0 auto'}} color="primary">
                        Search
                        </Button>

                </Box>
            
                   
                        
                    
               
                
                
                
            </Box>
        </div>
    )
}

export default HomePage
