import styles from './ErrorMessage.module.scss';


export interface ErrorMessageI {
    text?: string
    className?: string
}

export default function ErrorMessage({ text, className }: ErrorMessageI) {
    return text ? (
        <span
            className={`${styles.error} ${className}`}
        >
            {text}
        </span>
    ) : null;
}