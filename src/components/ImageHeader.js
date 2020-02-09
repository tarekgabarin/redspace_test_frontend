import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const Image = styled.div`
    height: 50vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    background-image: url('/Background.jpg');
`

const TitleText = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
`

export default function ImageHeader(props) {
    return (
            <Image>
                <TitleText>
                    <Typography variant="h1" component="h2" gutterBottom>
                        {props.name}
                    </Typography>
                </TitleText>
            </Image>
        
    )
}
