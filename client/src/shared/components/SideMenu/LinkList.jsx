import {
    Divider,
    List
} from "@mui/material";
import LinkListCollapse from "./LinkListCollapse";

export default function LinkList({ setCollapse, collapse }) {
    return (
        <List sx={{padding: 0}}>
            {/* <Divider /> */}
            <LinkListCollapse
                label={"Dashboard"}
                list={["Inicial", "Financeiro", "Afiliados"]}
                setCollapse={setCollapse}
                collapse={collapse}
            />
            {/* <Divider /> */}
            {/* <LinkListCollapse
                label={"Amostra"}
                list={["All mail", "Trash", "Spam"]}
                setCollapse={setCollapse}
                collapse={collapse}
            /> */}
        </List>
    );
}

{
    /* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map(
            (text, index) => (
                // <Link to={"/" + text.toLocaleLowerCase()}>
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Icon icon="gg:menu-left" />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
                // </Link>
            )
        )}
    </List> */
}
