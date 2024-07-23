import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={styles.navBarContainer}>
        <ul>
            <li>
                <a href=''>DESCUBRIR</a>
            </li>
            <li>
                |
            </li>
            <li>
                <a href='/'>INICIO</a>
            </li>
            <li>
                |
            </li>
            <li>
                <a href=''>TRAYECTOS</a>
            </li>
            
        </ul>
    </nav>
  )
}
