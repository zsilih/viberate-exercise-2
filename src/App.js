import React from 'react';
import Header from './Components/Header';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import ArtistDetail from './Views/ArtistDetail';
import axios from 'axios';


class App extends React.Component {

	state = {
		subgenres: [],
		};

	getGenres() {
		/*
		axios
		.get("https://run.mocky.io/v3/7c46c4ce-09c0-4f95-b4e1-84ae10bd24ab")
		.then(response => console.log(response.data.data.subgenres))
		*/

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

	
	componentDidMount() {
		this.getGenres();
	}


  render() {
	  const {subgenres} = this.state;
    return (
		<React.Fragment>
		<div className="container">
			<Router>
				<Header/>

				<Switch>
					<Route path="/artist/:artist_uuid">
						<ArtistDetail/>
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
					</Route>
				</Switch>

				
			</Router>
		</div>
		</React.Fragment>
    );
  }
}

export default App;
