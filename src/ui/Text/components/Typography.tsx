import { Typography, TypographyProps } from "@mui/material"
import { FC, PropsWithChildren } from "react"

type BaseTextProps = PropsWithChildren & TypographyProps

export const HeaderText: FC<BaseTextProps> = ({ children, ...styles }) => {
    return <Typography
        component="h1"
        variant="h4"
        {...styles}
    >
        {children}
    </Typography>
}

export const BodyText: FC<BaseTextProps> = ({ children, ...styles }) => {
    return <Typography
        component="p"
        variant="body1"
        {...styles}
    >
        {children}
    </Typography>
}

export const ButtonText: FC<BaseTextProps> = ({ children, ...styles }) => {
    return <Typography
        component="p"
        variant="button"
        {...styles}
    >
        {children}
    </Typography>
}

export const LabelText: FC<BaseTextProps> = ({ children, ...styles }) => {
    return <Typography
        component="label"
        variant="caption"
        {...styles}
    >
        {children}
    </Typography>
}