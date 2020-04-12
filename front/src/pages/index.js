import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import ProTip from "../components/app/ProTip"
import Link from "../components/core/Link"
import Copyright from "../components/app/Copyright"

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Gatsby v4-beta example
        </Typography>
        <Link to="/about" color="secondary">
          Go to the about page
        </Link>
        <Link to="/appshell" color="secondary">
          Go to the appshell page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}
