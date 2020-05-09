import React, { Component } from 'react'

class SearchField extends Component {

    constructor() {
        super()

        this.state = {
            searchQuery: "",
        }
    }

    handleSearchQuery = (event) => {
        this.setState({
            searchQuery: event.target.value,
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.getImages(this.state.searchQuery)
    }

    render() {
        const { searchQuery } = this.state;
        return (
            <form className="search-form" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Enter Search Query</label>
                    <input className="search-field" required value={searchQuery} onChange={this.handleSearchQuery} />
                </div>
                <div className="form-group">
                    <button type="submit" className="submit-btn">Search</button>
                </div>
            </form>
        )
    }
}

export default SearchField;