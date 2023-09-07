export default function Progress({ index, numQuestions, points, maxPossiblePoint, answer }) {
  return (
    <header className='progress'> 
      <progress value={index + Number(answer !== null)} max={numQuestions} /> 

      <p>Question <strong>{index + 1}</strong> / {numQuestions}</p>

      <p><strong>{points}</strong> / {maxPossiblePoint}</p>
    </header>
  )
}

// Number(true) returns 1
// Number(false) returns 0