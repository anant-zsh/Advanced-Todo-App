import React from 'react'

const Tabs = (props) => {
  const { todos, selectedTab, setSelectedTab } = props;
  const tabs = ['All', 'Open', 'Completed'];


  return (
    <div>

      {tabs.map((tab, tabIndex) => {
        let tabNum;
        if (tabIndex === 0) {
          tabNum = todos.length
        }
        else if (tabIndex === 1) {
          tabNum = todos.filter(val => !val.complete).length;
        }
        else {
          tabNum = todos.filter(val => val.complete).length;
        }

        return (
          <button key={tabIndex} 
                  onClick={() => {setSelectedTab(tab)}}>
            <h4>{tab} <span>({tabNum})</span></h4>
          </button>
        )
      })}
      <hr />
    </div>
  )
}

export default Tabs
