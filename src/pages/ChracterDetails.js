import React, {useEffect, useState} from 'react'
import {getPersonInfo} from '../utils/starWarsApi';

function ChracterDetails(props) {

    const [character, setCharacter] = useState({});

    useEffect(() => {

        let id = props.match.params.id;
        getPersonInfo(id).then(response => {

            setCharacter(response.data);

        })

      }, []);

    return (
        <div>
            <h1>{character.name}</h1>
        </div>
    )
}

export default ChracterDetails
