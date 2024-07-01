// @ts-nocheck
import { Fragment, FC } from "react"
import withStyles from "react-jss"
import fonts from "./assets/fonts"
import globalStyles, { Style } from "./styles/globalStyles"
import { Link } from "react-router-dom"
import routes from "./routes"

const styles: Style = {
  ...fonts,
  ...globalStyles,
  header: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "100%",
    padding: "0 2rem",
    textAlign: "left",
    boxSizing: "border-box",
  },
  app: {
    composes: "$header",
    minHeight: "100vh",
  },
}

interface Props {
  classes: { [key: string]: string }
}

const App: FC<Props> = ({ classes }) => {
  const allRoutesExceptHome = Object.values(routes.slice(0, routes.length - 1))
  return (
    <>
      <header className={classes.header}>
        <h1>Frontend Experiments</h1>
        <p>
          Playground and proof of concepts for canvas, 2D and 3D in web using
          React. Made by{" "}
          <a href="https://raaguln.vercel.app/" target="_blank">
            Raagul Nagendran
          </a>
          .
        </p>
      </header>
      <main className={classes.app}>
        <nav>
          {allRoutesExceptHome.map((d, i) => (
            <Fragment key={i}>
              {d.name === "Home" ? (
                <h2>{d.name}</h2>
              ) : (
                <Link key={i} to={d.path}>
                  <h2>{d.name}</h2>
                </Link>
              )}
              <p>{d.description}</p>
            </Fragment>
          ))}
        </nav>
      </main>
    </>
  )
}

export default withStyles(styles)(App)
