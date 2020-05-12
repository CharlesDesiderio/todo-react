import React, { useState } from 'react';
let i = 0;

const AddItem = () => {
    const [item, setItem] = useState("");
    const [itemList, setItemList] = useState([]);

    const updateList = () => {
        if (item) {
            i = i + 1;
            setItem('')
            setItemList([...itemList, [item, i]])
        }
    }

    const strikeOut = (e) => {
        console.log(e.target)
        if (e.target.style.textDecoration === 'line-through') {
            e.target.style.textDecoration = 'none';
        } else {
            e.target.style.textDecoration = 'line-through';

        }
    }

    const deleteItem = (e) => {
        setItemList(itemList.filter(x => x[1] !== parseInt(e.target.id)))
    }

    return (
        <div className="mainContent">
            <input placeholder="Add item ..." className="addItemInput" value={item} onChange={e => setItem(e.target.value)} /><button className="addItemSubmit" onClick={updateList}>Submit</button>
            {itemList.map(x => <div className="bigWrapper"><div className="individualItem" key={x[1]} onClick={strikeOut}><li>{itemList.indexOf(x) +1}.) {x[0]}</li></div><button className="deleteItem" id={x[1]} onClick={deleteItem}>❌</button></div>)}
        </div>
    )
}

export default AddItem;