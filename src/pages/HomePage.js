import React, {useState} from 'react'
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import Card from '../components/Card';
import Container from '@material-ui/core/Container';

function HomePage(props) {

    const [state, setState] = useState({
        searchId: 1,
        starWarsCharacters: [
            {
                id: 1,
                name: 'Luke Skywalker',
                image: 'https://media.gq.com/photos/56da0101062ab67b27facbd2/16:9/w_2560%2Cc_limit/luke-skywalker-gay-.jpg'
            },
            {
                id: 2,
                name: "C-3PO",
                image: 'https://images.immediate.co.uk/production/volatile/sites/3/2019/10/EP9-FF-001686-336e75b.jpg?quality=90&resize=620,413'
            },
            {
                id: 3,
                name: "R2-D2",
                image: 'https://www.sideshow.com/storage/product-images/2172/r2-d2-deluxe_star-wars_feature.jpg'
            },
            {
                id: 4,
                name: "Darth Vader",
                image: 'https://s.yimg.com/ny/api/res/1.2/soTg5zMneth9YIQz0ae_cw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://images.fatherly.com/wp-content/uploads/2018/12/darthvader-header.jpg?q=65&amp;enable=upscale&amp;w=1200'
            },
            {
                id: 5,
                name: "Leia Organa",
                image: 'https://lumiere-a.akamaihd.net/v1/images/leia_6d2292da.jpeg?region=97%2C107%2C1652%2C827&width=960'
            },
            {
                id: 10,
                name: "Obi-Wan Kenobi",
                image: 'https://s.abcnews.com/images/Entertainment/ht_alec_guinness_obi_wan_kenobi_star_wars_jc_160415_16x9_992.jpg'
            },
            {
                id: 12,
                name: "Wilhuff Tarkin",
                image: 'https://twt-thumbs.washtimes.com/media/image/2016/12/20/grand-moff-tarkin_c0-26-1438-864_s885x516.jpg?1b91ca3df513b8a286ef7a826d58dfa4b0538ce2'
            },
            {
                id: 13,
                name: "Chewbacca",
                image: 'https://www.syfy.com/sites/syfy/files/styles/1200x680/public/wire/legacy/ChewbaccaPants.jpg'
            },
            {
                id: 14,
                name: "Han Solo",
                image: 'https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2018/05/star-wars-episode-4-han-solo-hokey-religions-banner.jpg'
            }
        ]
    })

    function setSearchId(event){
        let id = event.target.value;
        console.log('id is', id);
        setState({
            ...state, 
            searchId: id
        })
    }

    function onSearchClick(){
        props.history.push('/character/' + state.searchId);
    }
    
    function onClickCard(id){
        console.log('card clicked');
        props.history.push('/character/' + id);
    }
    

    return (
        <Container maxWidth="md">
            <Box m={1} display='flex' justifyContent="center">
                <img style={{imageRendering: 'crisp-edges'}} src="/Star_Wars_Yellow_Logo.svg" alt="Logo" />
            </Box>

            <Box m={2} display='flex' flexDirection='row' justifyContent="center">

                <Box mr={1}>
                <FormControl>
                    <InputLabel htmlFor="person-id-input">Person ID</InputLabel>
                    <Input
                    onChange={setSearchId}
                    defaultValue={state.searchId}
                    min='1'
                    max='88'
                    type='number'
                    id="person-id-input"
                    aria-describedby="component-helper-text"
                    />
                    <FormHelperText id="component-helper-text">Search Character By ID</FormHelperText>
                </FormControl>
                </Box>
                
                <Box display='flex' flexDirection="column" justifyContent='center'>
                <Button onClick={onSearchClick} variant="outlined" style={{display: 'block', margin: '0 auto'}} color="primary">
                        Search
                        </Button>

                </Box>
                
            </Box>

            <Box mt={1}  display='flex' flexDirection='row' flexWrap="wrap" justifyContent="flex-start" >

                    {state.starWarsCharacters.map(char => {
                        return (
                            <Box onClick={(e) => onClickCard(char.id)} m={1} >
                                <Card name={char.name} key={char.id} image={char.image} />
                            </Box>
                            
                        )

                    })}
                
                
                </Box>   
        </Container>
    )
}

export default HomePage
