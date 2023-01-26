import React from 'react'
import Hearts from './Hearts/Hearts'
import "./Review.css"

function Review({review}) {

    const user = {
        pfp: "https://townsquare.media/site/442/files/2018/11/shrek-reboot-oh-no.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89",
        id: 0,
        username: "BunnyLover526"
    }

    return (
        <div className='review'>
            <div className='movie-header'>
                <img className='user-pfp' src={user.pfp} />
                <div className='review-title-box'>
                    <h1>{review.title}</h1>
                    {/* TODO redirect to user with id */}
                    <p><a>{user.username}</a></p>
                    <Hearts number={review.score} />
                </div>
                <div className='helpful-box'></div>
            </div>
            <div>
                <p>{review.body}</p>
            </div>
        </div>
    )
}

export default Review