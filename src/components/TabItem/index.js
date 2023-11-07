import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  console.log(isActive)

  const onClickTab = () => {
    clickTabItem(tabId)
  }

  const activeTabClassName = isActive ? 'tab-item' : ''
  const lineClassName = isActive ? 'line-tab' : ''

  return (
    <li className="tab-list">
      <button
        className={`button ${activeTabClassName} `}
        type="button"
        onClick={onClickTab}
      >
        {displayText}
      </button>
      <hr className={`horizontal-line ${lineClassName} `} />
    </li>
  )
}

export default TabItem
