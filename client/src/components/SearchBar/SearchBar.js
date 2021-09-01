// import styling, react and react-router-dom
import './SearchBar.scss';
import {Redirect} from 'react-router-dom'
import {Component} from 'react';


class SearchBar extends Component {
    state = {
        redirect: false,
        search: ''
    }

    handleSearch = (event) => {
        const searchStr = event.target.value.toLowerCase().trim();
        if(event.key === 'Enter' && searchStr) {
           this.setState({
               redirect: true,
               search: searchStr
           }, () => {
            event.target.value = '';
           }) 
           
        }
    }

    render() {
        const {redirect, search} = this.state;

        return (
            <>
                <input className="header__search-input" type="search" placeholder="Search" onKeyUp={this.handleSearch} />

                {redirect && <Redirect to={`/search/${search}`} />}
            </>
        )
    }
}

export default SearchBar;