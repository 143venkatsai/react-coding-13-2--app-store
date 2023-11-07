import './index.css'

const AppItem = props => {
  const {itemDetails} = props
  const {appName, imageUrl} = itemDetails

  return (
    <div className="list-container">
      <li className="list-element">
        <img src={imageUrl} alt={appName} className="app-icon" />
        <p className="app-name">{appName}</p>
      </li>
    </div>
  )
}

export default AppItem
