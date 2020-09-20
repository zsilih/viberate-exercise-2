import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Artists from './Artists';
import Loader from '../Components/Loader';

function Header() {
    const url = `https://run.mocky.io/v3/3cab6663-7cd8-4365-b8a6-4a1d89305f6a`;
    const [artists, setArtists] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setArtists({
          loading: true,
          data: null,
          error: false  
        })
        axios.get(url)
            .then(response => {
                setArtists({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setArtists({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    let content = null;

    if(artists.error) {
        content = <p>There was an error loading an artist.</p>
    }


    if(artists.loading) {
        content = <Loader/>
    }

    if(artists.data) {
        content = 
        artists.data.all_artists.map((artist, key) => 
            <Artists
                key = {key}
                artist={artist}
            />
        )
    }


    return (
        <header className="header">
        <div className="page">
            <a href="/" className="logo">
                <img src="./images/svg/logo-v.svg" alt="Viberate"/> Viberate
            </a>
            <nav className="navigation-primary">
                <ul className="menu-sys">
                    <li>
                        <button className="btn btn-menu search">Search</button>
                    </li>
                    <li>
                        <button className="btn btn-menu more">More</button>
                    </li>						
                </ul>		

                <ul className="menu">
                    {content}
                </ul>
                

            </nav>
        </div>
    </header>
    )
}


export default Header;