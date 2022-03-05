import React from 'react';

const List : React.FC<{item: string, onClick : (item: string)=> void}> = ({item, onClick}) => {
    return (
        <div>
            <li onClick={()=> onClick(item)}>
                {item}
            </li>
        </div>
    );
};

export default List;