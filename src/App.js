import React from 'react'
import { Switch, Route } from 'react-router-dom'
import injectSheet from 'react-jss'

import Header from './components/Header'

import Home from './views/Home'

const styles = theme => ({
  app: {
    fontFamily: theme.fontFamily,
    background: theme.backgroundColor,
    minHeight: '100vh',
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: '1fr auto 1fr',
    gridTemplateRows: 'auto 1fr',
    gridTemplateAreas: `
      'header header header'
      '. main .'
    `
  },
  main: {
    gridArea: 'main',
    padding: '25px',
    width: '75vw'
  }
})

@injectSheet(styles)
export default class App extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <div className={classes.app}>
        <Header />
        <main className={classes.main}>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </main>
      </div>
    )
  }
}
