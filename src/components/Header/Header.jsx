import styles from './Header.module.css'
import ModalMenu from '../ModalMenu/ModalMenu'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

export default function() {
    const [visible, setVisible] = useState(false)
    const imageRef = useRef(null)
    useEffect(() => {
        imageRef.current.style='filter: drop-shadow(0 0 5px rgba(255, 255, 255, 1))'
    }, [])
    return (
        <header>
            <div style={{backgroundImage: "url('https://seeklogo.com/images/T/type-o-negative-logo-01F8483064-seeklogo.com.png')", height: "100px", filter: "drop-shadow(0 0 5px rgba(0, 0, 0, 1))"}}></div>
            <img ref={imageRef} className={styles.logo} style={{filter: "drop-shadow(0 0 5px rgba(0, 0, 0, 1))"}} src="https://seeklogo.com/images/T/type-o-negative-logo-01F8483064-seeklogo.com.png" alt="" />
            <nav className={styles.navRight}>
            <a className={styles.navLink} href="">Official merch</a>
            <img className={styles.icon} style={{ filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 1))" }} src="/img/pngwing.com.png" alt="" onClick={() => setVisible(!visible)} />
            </nav>
            <ModalMenu isActive={visible}  />
        </header>
    )
}