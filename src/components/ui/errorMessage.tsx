import styles from './errorMessage.module.css';

export const ErrorMessage = ({ error }: { error?: string | null }) => {
    return (
        <>
            {error && <div className={styles.errorMessage}>
                <span className={styles.errorText}>{error}</span>
            </div>
            }
        </>
    );
}
