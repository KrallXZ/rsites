import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ThemeProvider, jss } from 'react-jss'
import preset from 'jss-preset-default'
import reset from 'reset-jss'
import theme from './theme'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Ubuntu:400,700']
  }
})

jss.setup(preset())
jss.createStyleSheet(reset).attach()
jss.createStyleSheet({
  '@global *': {
    boxSizing: 'border-box'
  }
}).attach()

class Index extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    )
  }
}

render(<Index />, document.querySelector('#app'))
