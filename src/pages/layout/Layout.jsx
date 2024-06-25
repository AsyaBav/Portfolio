import React from 'react'
import styles from "./Layout.module.css"
import { Outlet } from 'react-router-dom'
import { Navigation } from '../../components/NavigationCard/Navigation'

export const Layout = () => {
  return (
    <div  className={styles.container}>
        <div className={styles.sidebar}>
            <Navigation />
        </div>
        <div className={styles.header}>

        </div>

        <div className={styles.content}>
            <Outlet />
        </div>
    </div>
  )
}
