import React, { useState } from 'react'

export default function SpotCheck2() {
  const [isLoading, setIsLoading] = useState(true)
  const [lesson, setLesson] = useState({
    name: 'React Hooks',
    completed: false, started: false
  })

  const updateLesson = key => setLesson({ ...lesson, [key]: true })

  const lessonStatus = () => {
    if (lesson.completed)
      return 'Lesson status: Completed'
    if (lesson.started)
      return 'Lesson status: In progress'
    return 'Lesson status: Not started'
  }

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 2</h4>
      <div className="exercise" id="sc-2">
        {isLoading ? <div>Page is loading...</div>
          : (<div><p>{lesson.name}</p>
            <p>Lesson status: {lessonStatus()}</p>
            <button onClick={() => updateLesson('started')} >begin</button>
            <button onClick={() => updateLesson('completed')}>complete</button>
          </div>)}
      </div>
    </div>
  )
}