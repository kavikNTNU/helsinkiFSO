import {useState} from 'react' // likte det ikke uten { ... }

const Display = props => {
  const {clicks} = props
  const {good, neutral, bad} = clicks
  const all = good + neutral + bad

  if (all === 0) {
    return (
      <div>
        No feedback given. Hit a button to give feedback.
      </div>
    )
  }

  const average = (good - bad) / all
  const positive = (good / all) * 100

  const tableStyle = { borderCollapse: 'collapse' }
  const cellStyle = { border: '1px solid black', padding: '5px' }

  return (
    <table style={tableStyle}>
      <thead>
        <tr><th style={cellStyle}>Feedback</th><th style={cellStyle}>Count</th></tr>
      </thead>
      <tbody>
        <tr><td style={cellStyle}>good</td><td style={cellStyle}>{good}</td></tr>
        <tr><td style={cellStyle}>neutral</td><td style={cellStyle}>{neutral}</td></tr>
        <tr><td style={cellStyle}>bad</td><td style={cellStyle}>{bad}</td></tr>
        <tr><td style={cellStyle}>all</td><td style={cellStyle}>{all}</td></tr>
        <tr><td style={cellStyle}>average</td><td style={cellStyle}>{average}</td></tr>
        <tr><td style={cellStyle}>positive</td><td style={cellStyle}>{positive + ' %'}</td></tr>
      </tbody>
    </table>
  )
}

// const DisplayLine = props => {
//   const {text, value} = props
//   return (
//     <div>{text}: {value}</div>
//   )
// }

const App = (props) => {
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })
  console.log('rendering with stats values', clicks)
  const [allClicks, setAll] = useState([])
  
  const handleClick = (type) => {
    setAll(allClicks.concat(type))
    setClicks({
      ...clicks,
      [type]: clicks[type] + 1
    })
  }

  // const handleGood = () => {
  //   console.log('increasing, value before', clicks)
  //   setAll([...allClicks, 'good'])
  //   setClicks({...clicks, good: clicks.good + 1})
  // }

  // const handleNeutral = () => {
  //   console.log('setting to zero, value before', clicks)
  //   setAll([...allClicks, 'neutral'])
  //   setClicks({...clicks, neutral: clicks.neutral + 1})
  // }

  // const handleBad = () => {
  //   console.log('decreasing, value before', clicks)
  //   setAll([...allClicks, 'bad'])
  //   setClicks({...clicks, bad: clicks.bad + 1})
  // }

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )
  // console.log('rendering...', counter)

  // const handleClick = () => {
  //   console.log('clicked')
  //   setCounter(counter + 1)
  // }

  // This approach works because the component contains only a single return statement, making it possible to use the concise arrow function syntax.
  // const Display = ({ counter }) => <div>{counter}</div>

  // is a component, not a function, so it should be capitalized
  // instead off <button onClick={handleClick}>click</button> we can use <Button onClick={handleClick} text="click" />
  const Button = ({ onClick, text }) => {
    return (
      <button onClick={onClick}>{text}</button>
    )
  }

  return (
    <>
    <h1>give feedback</h1>
    <Button onClick={() => handleClick('good')} text="good" />
    <Button onClick={() => handleClick('neutral')} text="neutral" />
    <Button onClick={() => handleClick('bad')} text="bad" />
    <h1>statistics</h1>
    <Display clicks={clicks} />
    </>
  )
}

export default App