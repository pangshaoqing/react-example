import React from 'react';
import NewsList from './newsList'

class News extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
        this.newsMoreHandleClick = this.newsMoreHandleClick.bind(this);
    }

    

    newsMoreHandleClick(e) {
        
    }

    render() {
        return (
            <div>
                <div className="blogTitle">
                    <div className="blogName">News</div>
                    <div className="blogMore" onClick={this.newsMoreHandleClick}>MORE {String('>')}</div>
                </div>
                <NewsList />
            </div>
        )
    }
}

export default News