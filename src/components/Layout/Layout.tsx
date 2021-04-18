import React, { FunctionComponent } from "react"

import "../../styles/index.scss"
import * as layoutStyles from "./layout.module.scss"
import Header from "../Header"
import Footer from "../Footer"

type LayoutProps = {
  children?: React.ReactNode
}

const Layout: FunctionComponent = ({ children }: LayoutProps) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
