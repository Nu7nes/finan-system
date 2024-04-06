import { useTheme } from "@emotion/react";
import { Icon } from "@iconify/react";
import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    IconButton,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Modal,
    Stack,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    maxWidth: "90vw",
    bgcolor: "background.paper",
    // border: "2px solid #000",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
};

export default function ViewTodoModal({ item, onMarkTodo, onDeleteTodo }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const theme = useTheme();
    // const {
    //     register,
    //     handleSubmit,
    //     reset,
    //     formState: { errors },
    // } = useForm();

    // function onSubmit(data) {
    //     reset();
    //     onhandleSubmit(data);
    // }

    return (
        <>
            <ListItemButton onClick={handleOpen}>
                <ListItemAvatar>
                    <Avatar
                        sx={{
                            height: "2rem",
                            width: "2rem",
                            bgcolor: item.isConcluded
                                ? theme.palette.success.main
                                : theme.palette.gray.main,
                        }}
                    >
                        {item.isConcluded ? (
                            <Icon icon="ph:check-fat-bold" />
                        ) : (
                            <Icon icon="memory:close-outline" />
                        )}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.task} />
            </ListItemButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                keepMounted
            >
                {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                <Box sx={style}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography
                            id="modal-modal-title"
                            component="h2"
                            color="gray.main"
                        >
                            Tarefa
                        </Typography>
                        <Icon height="1.6rem" icon="f7:doc-fill" />
                    </Stack>
                    <Box m={3}>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            {item.task}
                        </Typography>
                    </Box>
                    <Stack
                        direction="row"
                        spacing={1}
                        alignSelf="flex-end"
                        mt={1}
                    >
                        <Tooltip title="Marcar como feita">
                            <IconButton
                                onClick={() => {
                                    onMarkTodo(item.task);
                                }}
                            >
                                <Icon icon="ph:check-bold" />
                            </IconButton>
                        </Tooltip>
                        {/* <Tooltip title="Editar">
                            <IconButton>
                                <Icon icon="typcn:edit" />
                            </IconButton>
                        </Tooltip> */}
                        <Tooltip title="Deletar">
                            <IconButton
                                onClick={() => {
                                    onDeleteTodo(item.task);
                                }}
                            >
                                <Icon icon="material-symbols:delete" />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </Box>
                {/* </form> */}
            </Modal>
        </>
    );
}
