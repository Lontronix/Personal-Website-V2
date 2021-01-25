import React, {Component} from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { init } from 'ityped';

export default class Header extends Component {
    componentDidMount() {
        const myElement = document.querySelector('#header__comment')
      init(myElement, { showCursor: true, strings: ['test123', 'test123' ] })
    }
    render() 
    { return <header className="header">
       <div className="header__full_name">
           <h1>Lonnie Gerol</h1>
       </div> 
       <span id="header__comment">
       </span>

       <div className="navigation">
           <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/projects">Projects</Link></li>
           </ul>
       </div>
    </header>
}};
