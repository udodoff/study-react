import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
export function ChatList(){
    const [chat, changeChat] = useState([{id: 1, name: "Masha"}, {id: 2, name: "Sasha"}, {id: 3, name: "Optimus"}, {id: 4, name: "Naruto"}])

    return(
        <>
         <List sx={{ width: '12%' }}>
            {chat.map((item, index) => (
                <ListItem key={index}>
                    <ListItemText primary={item.name} />
                </ListItem>
            ))}
         </List>
        </>
    )
}