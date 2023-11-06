// Write your code here
import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appName, imageUrl} = appItem
  return (
    <li className="app-card">
      <img className="app-logo" alt={appName} src={imageUrl} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
