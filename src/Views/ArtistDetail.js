import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Loader from '../Components/Loader';


function ArtistDetail() {
    const {artist_uuid} = useParams()
    const url = `https://run.mocky.io/v3/${artist_uuid}`; 
    const [artist, setArtist] = useState({
        loading: false,
        data: null,
        error: false
    })

    let content = null;

    useEffect(() => {
        setArtist({
          loading: true,
          data: null,
          error: false  
        })
        axios.get(url)
            .then(response => {
                setArtist({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setArtist({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])


    if(artist.error) {
        content = <p>There was an error loading an artist.</p>
    }


    if(artist.loading) {
        content = <p><Loader/></p>
    }


    if(artist.data) {
        content = 
        <main className="main">
            <section className="section section-artist-detail trending claimed">
                <div className="page">			
                    <div className="col visual">
                        <figure>
                            <img src= {artist.data.data.image}/>
                            <figcaption>
                                <button className="btn btn-claim-music-id">Claim music_id</button>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-wrapper">
                        <div className="col info">
                            <div className="col-content">								
                                <div className="info-wrapper">
                                    <div className="title-wrapper">
                                        <button className="btn btn-solid border btn-booking-request">Booking Request</button>
                                        <h1 className="title">
                                            {artist.data.data.name}
                                            <div className="tooltip-wrapper">
                                                <span className="profile-claimed">Profile claimed</span>
                                                <div className="tooltip">
                                                    <h3>Vote for subgenres</h3>
                                                    <p>Don’t agree with the subgenres? Add the ones you think are missing or vote for existing to get yours on top!</p>
                                                    <div className="stats-sheet">
                                                            {artist.data.data.subgenres.map(subgenre => {
                                                            const {name} = subgenre;
                                                            return (
                                                            <div className="row" key={name}>
                                                                <h5>{name}</h5>
                                                                <div className="graph-line">
                                                                    <span className="line" style= {{width: 47 + '%'}}>47%</span>
                                                                </div>
                                                            </div>
                                                            );
                                                        })}
                                                    </div>
                                                    <p>
                                                        <button className="btn btn-shadow">Vote now</button>
                                                    </p>
                                                </div>
                                            </div>											
                                            <span className="trending-icon">Trending</span>
                                        </h1>
                                    </div>
                                    <div className="row">
                                        <button className="btn btn-save long">Follow</button>
                                        <button className="btn btn-share">
                                            Share
                                            <span>Link copied to clipboard</span>
                                        </button>
                                    </div>
                                    <div className="row">
                                        <label>Origin</label>
                                        <a className="btn btn-filter-tag">{artist.data.data.country.name}</a>
                                    </div>
                                    <div className="row">
                                        <label>Genre</label>
                                        <span className="btn btn-filter-tag">{artist.data.data.genre.name}</span>
                                    </div>
                                    <div className="row">
                                        <label>Subgenres</label>
                                        {artist.data.data.subgenres.map(subgenre => {
                                            const {name} = subgenre;
                                            return (
                                                <span key={name} className="btn btn-filter-tag">{name}</span>                                                           
                                            );
                                        })}
                                        <div className="tooltip-wrapper">
                                            <button className="btn btn-add">Add subgenre</button>
                                            <div className="tooltip">
                                                <h3>Vote for subgenres</h3>
                                                <p>Don’t agree with the subgenres? Add the ones you think are missing or vote for existing to get yours on top!</p>
                                                <div className="stats-sheet">
                                                    {artist.data.data.subgenres.map(subgenre => {
                                                            const {name} = subgenre;
                                                            return (
                                                            <div className="row" key={name}>
                                                                <h5>{name}</h5>
                                                                <div className="graph-line">
                                                                    <span className="line" style= {{width: 47 + '%'}}>47%</span>
                                                                </div>
                                                            </div>
                                                            );
                                                        })}
                                                </div>
                                                <p>
                                                    <button className="btn btn-shadow">Vote now</button>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="footer-detail">

                                    <ul className="social-list">
                                        {artist.data.data.social_links.map(item => {
                                            const {channel, link} = item;
                                            return (
                                                <li key={channel, link}>
                                                    <a href= {link} className= {`btn social-icon ${channel}`}>{channel}</a>
                                                </li>
                                            );
                                        })}
                                    </ul>



                                    <div className="tooltip-wrapper">
                                            <button className="btn btn-add">Add links</button>
                                            <div className="tooltip">
                                                <h3>Got more info?</h3>
                                                <p>Add Place's links so everyone can see their social media highlights.</p>
                                                <p>
                                                    <button className="btn btn-shadow">Add links</button>
                                                </p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="col stats">
                            <div className="col-content">

                                <div className="stats-sheet">
                                    <label>Most popular in</label>
                                    {artist.data.data.popularity.map(popular => {
                                        const {city} = popular;
                                        return (
                                            <div className="row" key={city}>
                                                <h5>{city}</h5>
                                                <div className="graph-line">
                                                    <span className="line" style={{width: 47 + '%'}}>47%</span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                            </div>
                        </div>
                    </div>
                    <button className="btn btn-scroll-down">Scroll down</button>
                </div>
            </section>
        </main>      
    }
    

    return (
        <div>
            {content}
        </div>
    )
}


export default ArtistDetail;