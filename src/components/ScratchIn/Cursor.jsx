import React from "react"
import withStyles from "react-jss"

const styles = {
  cursor: {
    position: "absolute",
    borderRadius: "50%",
    backgroundColor: "hotpink",
    transition: "width 0.2s ease-in-out, height 0.2s ease-in-out",
    zIndex: 10,
  },
}

const Cursor = ({ classes, size, position }) => {
  return (
    <div
      className={classes.cursor}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${position[0] - size / 2}px`,
        top: `${position[1] - size / 2}px`,
      }}></div>
  )
}

export default withStyles(styles)(Cursor)
