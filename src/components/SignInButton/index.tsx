import styles from '../SignInButton/styles.module.scss'
import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'


export const Button = () => {

    const isUserLoggedin = false



    const handleButton = () => {
        if(isUserLoggedin !== false) {
            return         <button type='button' className={styles.button}> <FaGithub color="#04d361"/>  Joel Santos <FiX color='#737388' className={styles.closeIcon}/></button>
        }
    }

    return isUserLoggedin ? (
        <button type='button' className={styles.button}> <FaGithub color="#04d361"/>  Joel Santos <FiX color='#737388' className={styles.closeIcon}/></button>
    ) : (
        <button type='button' className={styles.button}  onClick={handleButton}> <FaGithub color="#eba417"/>  Sign in with GitHub</button>
    )
}