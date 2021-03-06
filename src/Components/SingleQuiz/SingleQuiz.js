import React from 'react'
import { Link } from 'react-router-dom'

function SingleQuiz({ game, result }) {
  return (
    <div class="card margin--medium">
        <div class="card__image--container container--relative">
          <img class="card__image " src="../Images/quiz.jpg" />
          { result ? <p class="text--large quiz--score">Score: {game?.score}</p> : null}
        </div>
        <div class="card__body background--light padding--medium">
            
            <div class="container__flex--spacebetween">
                <h2 class="card__title text--large">{game?.name}</h2>
                <Link to={"/quizgame/"+game?.id}>
                  <button class="btn btn--red">
                    {result ? 'Play Again' : 'Play Now'}
                  </button></Link>
            </div>

        </div> 
    </div> 
  )
}

export default SingleQuiz