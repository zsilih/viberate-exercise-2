import React from 'react';
import Header from './Components/Header';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import ArtistDetail from './Views/ArtistDetail';


class App extends React.Component {
  render() {
    return (
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
    );
  }
}

export default App;
