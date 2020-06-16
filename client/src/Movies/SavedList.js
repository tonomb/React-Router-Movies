import React from 'react';
import { NavLink, Link} from 'react-router-dom'

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <Link key={movie.id} to={`/movies/${movie.id}`}>
        <span  className="saved-movie">{movie.title}</span>
      </Link>
    ))}
    <NavLink activeClassName="nav-link" to='/'>
    <div className="home-button">Home</div>
    </NavLink>
  </div>
);

export default SavedList;
