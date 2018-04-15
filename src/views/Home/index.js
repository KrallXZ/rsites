import React from 'react'
import injectSheet from 'react-jss'

const styles = theme => ({
  home: {

  },
  heading: {
    fontWeight: '700',
    fontSize: '2rem'
  }
})

@injectSheet(styles)
export default class Home extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.home}>
        <h2 className={classes.heading}>O mnie</h2>
        <p>lipsum</p>
      </div>
    )
  }
}
