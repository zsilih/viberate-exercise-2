import React from 'react';
import Header from './Components/Header';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import ArtistDetail from './Views/ArtistDetail';
//import axios from 'axios';


class App extends React.Component {

	/*
	state = {
		subgenres: [],
		popularity: []
		};
	*/

	/*
	getGenres() {

		axios
		.get("https://run.mocky.io/v3/7c46c4ce-09c0-4f95-b4e1-84ae10bd24ab")
		.then(response => console.log(response.data.data.subgenres))


		axios
			
			.get("https://run.mocky.io/v3/7c46c4ce-09c0-4f95-b4e1-84ae10bd24ab")
			
			.then(response =>
			response.data.data.subgenres.map(subgenre => ({
				name: `${subgenre.name}`
			}))
			)
		
			.then(subgenres => {
			this.setState({
				subgenres,
			});
			})
			
		}
	*/

	/*
	getPopularity() {

		axios
		.get("https://run.mocky.io/v3/7c46c4ce-09c0-4f95-b4e1-84ae10bd24ab")
		.then(response => console.log(response.data.data.subgenres))


		axios
			
			.get("https://run.mocky.io/v3/7c46c4ce-09c0-4f95-b4e1-84ae10bd24ab")
			
			.then(response =>
			response.data.data.popularity.map(popular => ({
				city: `${popular.city}`
			}))
			)
		
			.then(popularity => {
			this.setState({
				popularity,
			});
			})
			
		}
	*/

	/*
	componentDidMount() {
		this.getGenres();
		this.getPopularity();
	}

		<div>
			{subgenres.map(subgenre => {
				const {name} = subgenre;
				return (
					<div key = {name}>
						<p>{name}</p>
					</div>
				);
			})}
		</div>
		<div>
			{popularity.map(popular => {
				const {city} = popular;
				return (
					<div key = {city}>
						<p>{city}</p>
					</div>
				);
			})}
		</div>
	*/


  render() {
	  //const {subgenres, popularity} = this.state;
    return (
		<React.Fragment>
		<div className="container">
			<Router>
				<Header/>

				<Switch>
					<Route path="/artist/:artist_uuid">
						<ArtistDetail/>
					</Route>
				</Switch>
			
			</Router>
		</div>
		</React.Fragment>
    );
  }
}

export default App;
