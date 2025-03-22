import { FC } from 'react'
import { Link, To } from 'react-router-dom'

interface NotFoundPageProps {
    text: string
    to: To
    toText?: string
}

const NotFoundPage: FC<NotFoundPageProps> = ({ text, to, toText = "Перейти на домашнюю страницу" }) => {
    return <div style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <h1>{text}</h1>
        <Link to={to}>{toText}</Link>
    </div>
}

export default NotFoundPage