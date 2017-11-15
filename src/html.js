import React from "react"

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          {css}
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
          <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" id="snipcart" data-api-key="NTAyMTMwNzgtMzU1NS00YmM2LWJmN2UtYmY3MWZlMWQwOGI5NjM2NDU3OTAzMTE1Njk5NTU0"></script>
          <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" type="text/css" rel="stylesheet" />
        </head>
        <body>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
