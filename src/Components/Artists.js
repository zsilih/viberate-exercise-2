import React from 'react';
import {Link} from 'react-router-dom';

function Artists(props) {
    return (
        <li>
            <Link to = {`/artist/${props.artist.artist_uuid}`}>
                {props.artist.artist_name}
            </Link>
        </li>
    )
}



export default Artists;