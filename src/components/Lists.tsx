import React from 'react';
import List from './List';

const Lists = () => {
    const items : string[] = ["mizan", "Zara"];
    const onClick = (item: string) : void => {
        alert(item);
    }
    return (
        <div>
            {
                items.map((item, i) => <List
                key={i}
                item ={item}
                onClick={onClick}
                ></List>)
            }
        </div>
    );
};

export default Lists;