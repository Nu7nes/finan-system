import { Icon } from "@iconify/react";
import {
    Box,
    Button,
    ButtonGroup,
    Modal,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { useEffect } from "react";
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

export default function NewTodoModal({ open, handleClose, onhandleSubmit }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    function onSubmit(data) {
        reset()
        onhandleSubmit(data)
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            keepMounted
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={style}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            Nova tarefa!
                        </Typography>
                        <Icon height="1.6rem" icon="mdi:task-add" />
                    </Stack>
                    <TextField
                        id="task"
                        label="Tarefa"
                        variant="standard"
                        size="small"
                        fullWidth
                        sx={{ marginY: 2 }}
                        
                        {...register('task')}
                    />
                    <Stack
                        direction="row"
                        spacing={1}
                        alignSelf="flex-end"
                        mt={1}
                    >
                        <Button variant="contained" type="submit">Salvar</Button>
                        <Button variant="outlined" onClick={handleClose}>
                            Fechar
                        </Button>
                    </Stack>
                </Box>
            </form>
        </Modal>
    );
}
