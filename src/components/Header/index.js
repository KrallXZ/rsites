import React from 'react'
import injectSheet from 'react-jss'

const styles = theme => ({
  header: {
    gridArea: 'header',
    padding: '15px',
    background: '#ffffff'
  },
  heading: {
    fontWeight: '700',
    fontSize: '2rem'
  }
})

@injectSheet(styles)
export default class Header extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.header}>
        <h1 className={classes.heading}>xxx</h1>
        <span>Profesjonalne & nowoczesne aplikacje internetowe</span>
      </div>
    )
  }
}
