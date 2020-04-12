import React from "react"
import { Helmet as ReactHelmet } from "react-helmet"

export default function Helmet() {
  return (
    <React.Fragment>
      <ReactHelmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </ReactHelmet>
    </React.Fragment>
  )
}
