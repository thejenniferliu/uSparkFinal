import React, { useState, useEffect } from 'react'
import MatchCard from './MatchCard'

export default function Match(props) {

    const [scoresandusernames, setScoresandusernames] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/api/match/${props.userId}/scores`)
        .then(res => res.json())
        .then(data => setScoresandusernames(data))
        console.log(scoresandusernames)
    }, [])

    // useEffect(() => {
    //     fetch('http://localhost:5000/api/')

    // })

  return (
    <>
    <h1 className = 'title text-center mt-5'>Your Matches Below</h1>
    <div className = 'container-fluid'>
      {scoresandusernames.map((item, index) => <MatchCard key = {index} score = {item.score} username = {item.user.username}/>)}
    </div>
    </>
    )
}
