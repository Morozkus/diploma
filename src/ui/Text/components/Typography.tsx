import { Typography, TypographyProps } from "@mui/material";
import { FC, PropsWithChildren } from "react";

type BaseTextProps = PropsWithChildren & TypographyProps;

export const HeaderText: FC<BaseTextProps> = ({ children, ...styles }) => {
    return (
        <Typography
            component="h1"
            variant="h4"
            {...styles}
            sx={{ wordBreak: "break-word", ...styles.sx }}
        >
            {children}
        </Typography>
    );
};

export const BodyText: FC<BaseTextProps> = ({ children, ...styles }) => {
    return (
        <Typography
            component="p"
            variant="body1"
            {...styles}
            sx={{ wordBreak: "break-word", ...styles.sx }}
        >
            {children}
        </Typography>
    );
};

export const ButtonText: FC<BaseTextProps> = ({ children, ...styles }) => {
    return (
        <Typography
            component="p"
            variant="button"
            {...styles}
            sx={{ wordBreak: "break-word", ...styles.sx }}
        >
            {children}
        </Typography>
    );
};

export const LabelText: FC<BaseTextProps> = ({ children, ...styles }) => {
    return (
        <Typography
            component="label"
            variant="caption"
            {...styles}
            sx={{ wordBreak: "break-word", ...styles.sx }}
        >
            {children}
        </Typography>
    );
};
