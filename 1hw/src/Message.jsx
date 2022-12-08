import styles from './Message.module.css'

export function Message(props){
    return(
        <h1 className={styles.main_heading}>{props.text}</h1>
    )
}