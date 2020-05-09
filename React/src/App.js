import React, { Component } from 'react';
import SearchField from "./components/SearchField"
import FoundImages from "./components/FoundImages"
import axios from "axios";
const url = "https://nature-image-api.now.sh/search?q=";

class App extends Component {

  constructor() {
    super()

    this.state = {
      images: [],
      loading: false
    }
  }

  getImages = (searchQuery) => {
    this.setState({
      loading: true
    })
    axios.get(url + searchQuery)
      .then(res => {
        console.log(res.data);
        
        this.setState({
          images: res.data.images,
          loading: false
        })
      })
      .catch(err => console.log(err));

  }

  render() {
    const {loading} = this.state;
    return (
      <div className="container">
        <h1>Search For Nature Images - React</h1>
        <SearchField getImages={this.getImages} />
        {
          loading ? <div className="loader"> </div> : <FoundImages images={this.state.images} /> 
        }
      </div>
    );
  }

}

export default App;
