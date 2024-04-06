import { Icon } from "@iconify/react";
import {
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useTheme,
} from "@mui/material";
import { useState } from "react";
import ViewTodoModal from "./Modals/ViewTodo";

export default function CustomList({ list, onMarkTodo, onDeleteTodo }) {
    const theme = useTheme();
    const [actions, setActions] = useState(false);

    return (
        <List>
            {list.map((item, index) => (
                <ListItem disablePadding key={index}>
                    <ViewTodoModal
                        item={item}
                        onMarkTodo={onMarkTodo}
                        onDeleteTodo={onDeleteTodo}
                    />
                </ListItem>
            ))}
        </List>
    );
}
