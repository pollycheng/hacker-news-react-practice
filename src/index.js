import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Time from './time';

const News = ({lists}) =>(
    <div>
    <div className="header">
        <span className="icon">{lists.icon}</span>
        <span className="header-title">{lists.title}</span>
        <span className="nav">{lists.navs.map(nav=><span className="nav-items">{nav} | </span>)}</span>
    </div>
    <div className="main">
        <span className="stories-items">
        {lists.stories.map(story=>(<Stories key={story.id} story={story}/>))}
        
        </span>
    </div>
    </div>
    );

const Stories = ({story}) =>(
    <span className="stories-item">
        <span className="item-id">{story.id}.</span>
        <span className="item-title">{story.title}</span>
        <span className="item-source">({story.source})</span>
        <span className="item-message">{story.points} points by 
        {story.author} <Time time={story.timeline}/> | flag | gide | {story.comments} 
        comments | instapaper | save to pocket</span>
    </span>

);
    
    var lists = {
        icon: "Y",
        title: "Hacker News",
        navs: ["new","threads","comments","show","ask","jobs","submit"],
        stories:[
            {
                id:1,
                title:"Why I'm Suing the US Government",
                source:"bunniestudios.com",
                points: 1346,
                author: "ivank",
                timeline: "2019-2-3 11:44:00",
                comments: 257
            },
            {
                id:2,
                title:"Zenzizenzizenzic",
                source:"wikipedia.org",
                points:140,
                author:"vinchuco",
                timeline: "2019-1-8 01:24:00",
                comments: 40
            },
            {
                id:3,
                title:"A Practical security guide for web developers",
                source:"github.com",
                points:72,
                author:"zianwar",
                timeline: "2019-2-1 21:24:00",
                comments: 6
            },
            {
                id:4,
                title:"I got arresred in Kazakhstan and represented my self in court",
                source:"medium.com",
                points:370,
                author:"drop",
                timeline: "2019-1-18 21:24:00",
                comments: 79
            }
        ]
    
    }
    
    ReactDOM.render(<News lists={lists} />, document.getElementById('root'));

