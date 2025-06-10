import { Stack, StackProps, SxProps } from "@mui/material";
import MUIModal from "@mui/material/Modal";
import { useState, FC, PropsWithChildren, ReactNode } from "react";

interface ModalProps extends PropsWithChildren {
    trigger: ReactNode;

    opened?: boolean;
    onChangeOpened?: (isOpen: boolean) => void;
    closeOnInnerClick?: boolean;

    triggerContainerStyles?: StackProps;
    popoverContainerStyles?: StackProps;

    container?: boolean;
}

const Modal: FC<ModalProps> = ({
    trigger,
    opened,
    onChangeOpened,
    closeOnInnerClick = true,
    triggerContainerStyles,
    popoverContainerStyles,
    container = false,
    children,
}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
        onChangeOpened?.(true);
    };
    const handleClose = () => {
        setOpen(false);
        onChangeOpened?.(false);
    };

    return (
        <>
            <Stack
                onClick={handleOpen}
                {...triggerContainerStyles}
                display={container ? "contents" : "flex"}
            >
                {trigger}
            </Stack>
            <MUIModal open={opened ?? open} onClose={handleClose}>
                <Stack
                    onClick={closeOnInnerClick ? handleClose : void 0}
                    sx={style}
                    {...popoverContainerStyles}
                >
                    {children}
                </Stack>
            </MUIModal>
        </>
    );
};

const style: SxProps = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 400,
    width: "100%",
    bgcolor: "background.paper",
    border: "1px solid #000",
    borderRadius: 2,
    boxShadow: 24,
    padding: 4,
};

export default Modal;
