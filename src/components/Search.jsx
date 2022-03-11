import React from "react";
import { Main } from "../layout/Main";

class Search extends React.Component {

    state = {
        search: '',
        type: '',
    };

    handleKey = (evt) => {
        if (evt.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };

    handleFilter = (evt) => {        
        if (evt.target.value === 'all') {           
            this.setState(() => ({type: ''}), () => {
                this.props.searchMovies(this.state.search, this.state.type)})            
        } else {
            this.setState(() => ({type: evt.target.value}), () => {
                this.props.searchMovies(this.state.search, this.state.type)})
        }
    }
    
    render() {  

        const { searchMovies } = this.props;
        return (
            <>
                <form className="input-field row">
                    <input 
                        type="search" 
                        name="search" 
                        className="validate col s10" 
                        placeholder="Search"
                        value={this.state.search}
                        onChange={(evt) => {
                            this.setState({search: evt.target.value})
                        }} 
                        onKeyDown={this.handleKey}                    
                    />   
                    <button 
                        className="btn waves-effect waves-light right col s2"                     
                        name="action"
                        onClick={(evt) => {
                            evt.preventDefault();
                            searchMovies(this.state.search, this.state.type)
                        }}>                           
                        Search
                    </button>                        
                </form>
                <div className="row-radio">
                    <p>
                        <label>
                            <input 
                                name="type" 
                                type="radio"
                                value='all'
                                onChange={this.handleFilter}  
                                checked={this.state.type === ''}                                  
                            />
                            <span>All</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input 
                                name="type" 
                                type="radio"
                                value='movie'
                                onChange={this.handleFilter} 
                                checked={this.state.type === 'movie'}                                   
                            />
                            <span>Movies only</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input 
                                name="type" 
                                type="radio"
                                value='series'
                                onChange={this.handleFilter}  
                                checked={this.state.type === 'series'}                                    
                            />
                            <span>Series only</span>
                        </label>
                    </p>                    
                </div>
            </>
        )
    }
}

export {Search};