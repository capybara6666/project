import styles from "./ModalMenu.module.css"

export default function(props) {
const display = {display:props.isActive? 'block' : 'none'}
    return (
        <div style={display} className={styles.outer}>

            <div className={styles.inner}>
                <div>
                    <p>Hello</p>
                    <p>Bye</p>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}