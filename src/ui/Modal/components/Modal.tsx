import { SxProps } from "@mui/material";
import Box, { type BoxProps } from '@mui/material/Box';
import MUIModal from '@mui/material/Modal';
import { useState, FC, PropsWithChildren, ReactNode } from 'react';

interface ModalProps extends PropsWithChildren {
    trigger: ReactNode

    outsideOpenState?: boolean
    closeOnInnerClick?: boolean

    triggerContainerStyles?: BoxProps
    popoverContainerStyles?: BoxProps
}

const Modal: FC<ModalProps> = ({ trigger, closeOnInnerClick = true, triggerContainerStyles, popoverContainerStyles, children }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return <div>
        <Box onClick={handleOpen} {...triggerContainerStyles}>
            {trigger}
        </Box>
        <MUIModal
            open={open}
            onClose={handleClose}
        >
            <Box onClick={closeOnInnerClick ? handleClose : void 0} sx={style} {...popoverContainerStyles}>
                {children}
            </Box>
        </MUIModal>
    </div>
}

const style: SxProps = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius: 2,
    boxShadow: 24,
    padding: 4,
};


export default Modal