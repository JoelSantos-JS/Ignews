import styles from './styles.module.scss'

interface SubscribeButtonProps {
    priceId: string;
}

export const SubButton = ({priceId} : SubscribeButtonProps) => {
    return (
        <button type="button" className={styles.sub}>
                Subscribe now
        </button>
    )
}