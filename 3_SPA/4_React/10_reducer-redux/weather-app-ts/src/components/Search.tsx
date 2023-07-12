import React, { FC, useState, FormEvent } from 'react';




interface SearchProps {
    title: string;
}

const Search: FC<SearchProps> = ({title}) => {
   

    return(
        <div className="hero has-text-centered mr-5 mt-5 mb-2">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <form className="py-5" onSubmit={submitHandler}>
          <div className="control has-icons-left has-icons-right">
            <input 
              type="text"
              className="input mb-2 is-primary is-rounded"
              placeholder="Enter a city name"
              style={{maxWidth: 300}}
              value={city}
              onChange={changeHandler}
            />
            <span className="icon is-medium is-left">
            <i className="fas fa-globe"></i>
            </span>
            </div>
            
            <button className="button is-link is-rounded is-fullwidth" style={{maxWidth: 200, margin: '0 auto'}}>Search</button>
          </form>
        </div>
      </div>
    </div>
    )
}
export default Search;