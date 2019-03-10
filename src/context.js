import React, { Component } from "react";
import axios from "axios";
import request from "request";

const Context = React.createContext();

/**
 * Reducer for the search
 * Update the globle state after api returns the data
 * @param state
 * @param action
 */
const reducer = (state, action) => {
	switch (action.type) {
		case "SEARCH":
			return {
				...state,
				trackList: action.payload,
				heading: action.heading,
				searchType: action.searchType,
				noResult: action.noResult
			};
		default:
			return state;
	}
};

export class Provider extends Component {
	constructor() {
		super();
		this.state = {
			trackList: [],
			heading: "Top 10 Tracks",
			searchType: "track",
			noResult: false,
			dispatch: action => this.setState(state => reducer(state, action))
		};
	}

	/**
	 * Initial request for the api to load data.
	 */
	componentDidMount() {
		//Set the auth options
		const authOptions = {
			url:
				"https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/api/token",
			headers: {
				Authorization:
					"Basic " +
					new Buffer(
						process.env.REACT_APP_SPOTIFY_CLIENT_ID +
							":" +
							process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
					).toString("base64")
			},
			form: {
				grant_type: "client_credentials"
			},
			json: true
		};
		//Send the post request to the api to get a access token
		request.post(authOptions, (error, response, body) => {
			if (!error && response.statusCode === 200) {
				// use the access token to access the Spotify Web API
				const token = body.access_token;
				//using the access token get the data from the api
				axios
					.get(
						"https://api.spotify.com/v1/search?q=linkin%20park&type=track&market=US&limit=20&offset=0",
						{
							headers: {
								Authorization: `Bearer ${token}`
							}
						}
					)
					.then(res => {
						this.setState({
							trackList: res.data.tracks.items
						});
					})
					.catch(err => console.log(err));
			}
		});
	}

	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export const Consumer = Context.Consumer;
