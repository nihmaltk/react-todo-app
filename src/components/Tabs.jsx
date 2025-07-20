// Tabs component allows filtering tasks by category (All, Open, Completed)
export const Tabs = ({selectedTab, setSelectedTab, todos}) => {

  // Define the tab labels
  const tabs = ['All', 'Open', 'Completed']

  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        // Calculate number of tasks for each tab
        const numberOfTasks =
        tab === 'All' ? todos.length :
        tab === 'Open' ? todos.filter(val=> !val.complete).length : 
        todos.filter(val => val.complete).length

        // Highlight the active tab
        const isActive = selectedTab === tab ? 'active-tab' : ''

        return(
          <button onClick={()=> setSelectedTab(tab)} key={tabIndex} className={`tab-button ${isActive}`}>
            {tab} ({numberOfTasks})
          </button>
        )

      })}
    </nav>
  )
}
