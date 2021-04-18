import React from 'react'

function SidebarRow(props) {
    return (
        <div className={`sidebar__row ${props.selected && "selected"}`}>
            <props.Icon className="sidebar__icon" />
            <span className="sidebar__text">{props.name}</span>
        </div>
    )
}

export default SidebarRow
