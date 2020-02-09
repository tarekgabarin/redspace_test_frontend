import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {getPersonInfo} from '../utils/starWarsApi';
import Container from '@material-ui/core/Container';
import ImageHeader from '../components/ImageHeader'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { CircleSpinner } from "react-spinners-kit";
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const CenterLoadingScreen = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
`

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function CharacterDetails(props) {

    const [state, setState] = useState({
        character: {},
        isLoading: true
    });

    const classes = useStyles();

    useEffect(() => {

        let id = props.match.params.id;
        getPersonInfo(id).then(response => {

            console.log('response.data is', response.data);

            setState({
                character: response.data,
                isLoading: false
            });

        })

      }, []);

      function goBack(){
          props.history.push('/')
      }

      if (state.isLoading){

        return (
            <Container maxWidth="md">

                <CenterLoadingScreen>
                    <CircleSpinner size={60} color="#686769" loading={state.isLoading} />
                </CenterLoadingScreen>

            </Container>
        )

         
      } else {
        return (
            <section>
                <ImageHeader name={state.character.name}></ImageHeader>
                <Container maxWidth="md">

                    <Box m={2}>
                    <Button onClick={goBack} variant="contained" color="primary">
                        Back
                    </Button>
                    </Box>

                

                <Box m={2}>
                        
                        <Typography variant="h2" gutterBottom>
                                Planet and Species
                        </Typography>
            
                        <p>{state.character.name} is a {state.character.species[0].name} from the planet of {state.character.homeworld.name}.</p>
            
                        <h1>{state.character.species[0].name}</h1>
                            
                            <ul>    
                                <li>Classification: {state.character.species[0].classification}</li>
                                <li>Average Lifespan: {state.character.species[0].average_lifespan}</li>
                                <li>Language: {state.character.species[0].language}</li>
                            </ul>
            
            
                        <h1>{state.character.homeworld.name}</h1>

                            <ul>    
                                <li>Classification: {state.character.species[0].classification}</li>
                                <li>Average Lifespan: {state.character.species[0].average_lifespan}</li>
                                <li>Language: {state.character.species[0].language}</li>
                            </ul>
            
                
                </Box>   

                <Box m={2}>

                <Typography variant="h2" gutterBottom>
                            Physical Attributes
                        </Typography>
    
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>Height</TableCell>
                                    <TableCell align="right">Mass</TableCell>
                                    <TableCell align="right">Hair Color</TableCell>
                                    <TableCell align="right">Skin Color</TableCell>
                                    <TableCell align="right">Gender</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                    <TableCell component="th" scope="row">
                                        {state.character.height}
                                    </TableCell>
                                    <TableCell align="right">{state.character.mass}</TableCell>
                                    <TableCell align="right"> {state.character.hair_color} </TableCell>
                                    <TableCell align="right">{state.character.skin_color}</TableCell>
                                    <TableCell align="right">{state.character.gender}</TableCell>
                                    </TableRow>
                            
                                </TableBody>
                            </Table>
                            </TableContainer>

                </Box>


                <Box m={2}>

                        <Typography variant="h2" gutterBottom>
                                    Films
                                </Typography>

                                <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="simple table">
                                        <TableHead>
                                        <TableRow>
                                            <TableCell>Title</TableCell>
                                            <TableCell align="right">Director</TableCell>
                                            <TableCell align="right">Release Date</TableCell>
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            

                                            {state.character.films.map(item => {
                                                return (
                                                            <TableRow>
                                                                <TableCell component="th" scope="row">
                                                                    {item.title}
                                                                </TableCell>
                                                                <TableCell align="right">{item.director}</TableCell>
                                                                <TableCell align="right"> {item.release_date} </TableCell>
                                                            </TableRow>
                                                )
                                            })}

                                        </TableBody>
                                    </Table>
                                    </TableContainer>

                        </Box>
    

    
    
                </Container>
            </section>
        )
      }




}

export default CharacterDetails
