import React from "react"

import AppShell from "../components/app/AppShell"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import ProTip from "../components/app/ProTip"
import Link from "../components/core/Link"
import Copyright from "../components/app/Copyright"

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

export default function Index() {
  return (
    <AppShell menuItems={listItemData}>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Gatsby v4-beta example
          </Typography>
          <Link to="/about" color="secondary">
            Go to the about page
          </Link>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </AppShell>
  )
}
