import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import "../../src/App.css";

const Details = () => {
    const [logindata, setLoginData] = useState([]);
    const [movieData, setMovieData] = useState([]);
    const history = useNavigate();

    const userlogout = () => {
        localStorage.removeItem("user_login");
        history("/");
    };

    useEffect(() => {
        const getuser = localStorage.getItem("user_login");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
            setLoginData(user);
        }

        // Fetch movie data when the component mounts
        fetchMovieData();
    }, []);

    const fetchMovieData = async () => {
        try {
            const response = await axios.post('https://hoblist.com/api/movieList', {
                category: 'movies',
                language: 'kannada',
                genre: 'all',
                sort: 'voting',
            });
            console.log('API Response:', response.data);
            setMovieData(response.data.result || []);
        } catch (error) {
            console.error('Error fetching movie data:', error);
        }
    };

    return (
        <>
            {logindata.length === 0 ? (
                <p>Error: User not logged in.</p>
            ) : (
                <>
                    <div className='btn'>
                        <Button onClick={userlogout}>Log Out</Button>
                    </div>
                    {movieData.length === 0 ? (
                        <p>Loading movie data...</p>
                    ) : (
                        <div className="movie-list">
                            {movieData.map((movie, index) => (
                                <div className="movie-card" key={index}>
                                    <div className="vote-section">
                                        <span className="vote-arrow up-arrow">🔼</span>
                                        <span className="vote-count">{movie.voting}</span>
                                        <span className="vote-arrow down-arrow">🔽</span>
                                        <span className='vote'>Votes</span>
                                    </div>
                                    <img className="movie-poster" src={movie.poster} alt='movie-poster'/>
                                    <div className="movie-card-content">
                                        <h4>{movie.title}</h4>
                                        <p>Directors: {movie.director}</p>
                                        <p>Stars: {movie.stars}</p>
                                        <p>Genre: {movie.genre}</p>
                                        <p>Language: {movie.language}</p>
                                        <div className="movie-stats">
                                            <h6 className='movie-stats-text'>{movie.pageViews} Views</h6>
                                            <h6 className='movie-stats-text'>Voted by {movie.voting} People</h6>
                                        </div>
                                        <Button
                                            variant="primary"
                                            // onClick={() => window.open(movie.trailerUrl, '_blank')}
                                        >
                                            Watch Trailer
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export default Details;
