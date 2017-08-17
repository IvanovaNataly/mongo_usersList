import React from "react";


function getPost( {title, body}, index ){
    return (<dl key={ index }>
                <dt>{title}</dt>
                <dd>{body}</dd>
            </dl>)
}

export default class UserPosts extends React.Component{

    render() {
        if(!this.props.posts) {
            return (
                <div>Can't find any posts...</div>
            );
        }

        return (<article>
            {
                this.props.posts.map(getPost)
            }
        </article>)
    }
}
