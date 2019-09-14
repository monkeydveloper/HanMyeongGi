import React from 'react';
import './Movie.css';

class Movie extends React.Component {
        render(){
            console.log(this.props.title);
        return(
            <div>
                <h1>hello this is movie</h1>
                <img src={this.props.poster}/>
            </div>
        )
    }
}



export default Movie;