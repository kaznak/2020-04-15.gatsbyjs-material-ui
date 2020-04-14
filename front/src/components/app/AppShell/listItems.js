import React from "react"

import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import ListSubheader from "@material-ui/core/ListSubheader"

import DashboardIcon from "@material-ui/icons/Dashboard"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import PeopleIcon from "@material-ui/icons/People"
import BarChartIcon from "@material-ui/icons/BarChart"
import LayersIcon from "@material-ui/icons/Layers"
import AssignmentIcon from "@material-ui/icons/Assignment"

const listItemData = [
  {
    name: "mainListItems",
    items: [
      { name: "Dashboard", icon: DashboardIcon },
      { name: "Orders", icon: ShoppingCartIcon },
      { name: "Customers", icon: PeopleIcon },
      { name: "Reports", icon: BarChartIcon },
      { name: "Integrations", icon: LayersIcon },
    ],
  },
  {
    title: "Saved reports",
    name: "secondaryListItems",
    items: [
      { name: "Current month", icon: AssignmentIcon },
      { name: "Last quarter", icon: AssignmentIcon },
      { name: "Year-end sale", icon: AssignmentIcon },
    ],
  },
]

function listItems(listSection) {
  const title = listSection.title
  const items = listSection.items
  return (
    <React.Fragment>
      {title && <ListSubheader inset>{title}</ListSubheader>}
      {items.map((value, index) => (
        <ListItem button key={index}>
          <ListItemIcon>{React.createElement(value.icon)}</ListItemIcon>
          <ListItemText primary={value.name} />
        </ListItem>
      ))}
    </React.Fragment>
  )
}

export const mainListItems = listItems(listItemData[0])
export const secondaryListItems = listItems(listItemData[1])
