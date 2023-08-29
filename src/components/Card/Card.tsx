import style from "./Card.module.css";

interface CardProps {
    children: React.ReactNode
}

export const Card = ({children} : CardProps) => {
    return <div className={style.card}>{children}</div>
}