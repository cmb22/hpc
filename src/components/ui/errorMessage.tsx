import styles from './errorMessage.module.css';

export const ErrorMessage = ({ error }: { error?: string }) => {
    return (
        <>
            {error && <div className={styles.errorMessage}>
                <span className={styles.errorText}>{error}</span>
            </div>
            }
        </>
    );
}
export default ErrorMessage;