import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Link from "../components/core/Link"
import Copyright from "../components/app/Copyright"

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Page not found.
        </Typography>
        <Link to="/" color="secondary">
          Go to the top view.
        </Link>
        <Copyright />
      </Box>
    </Container>
  )
}
