import {useState} from "react";

const Display = ({currentList, handleAddNewItem}) => {

    const defaultState = {
        item:"",
        price:0
    }
    const [newItem, setNewItem] = useState({...defaultState});

    // Display a list passed down from parent (App.js)
    const DisplayCurrentList = () => {
        return currentList.map(({item, price}, index) => {
            return(
                <div style={{display:"flex", justifyContent:"center"}} key={index}>
                    <div style={{padding:"10px"}}> {index + 1}.</div>
                    <div style={{padding:"10px"}}> {item}</div>
                    <div style={{padding:"10px"}}> ${price}</div>                
                </div>
            )
        })
    }

    // This is called when textfield is changed
    const handleOnChange = (e) => {
        setNewItem(prevState => {
            return {
                ...prevState,
                [e.target.name]:e.target.value
            }
        })
    }

    // This is called when add button is clicked
    const onClickAddButton = () => {
        handleAddNewItem(newItem); // Pass the newItem to the parent (App.js) using a function passed via props
        setNewItem({...defaultState}); // Reset the newItem state to default state
    }

    return(
        <>
            <div id="container" >
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div style={{padding:"10px", fontWeight:"bold"}} id="numbering">#</div>
                    <div style={{padding:"10px", fontWeight:"bold"}} id="itemName">Item</div>
                    <div style={{padding:"10px", fontWeight:"bold"}} id="itemPrice">Price</div>
                </div>

                <DisplayCurrentList/>
                
                <div style={{display:"flex", justifyContent:"center"}} >
                    <div style={{padding:"10px"}}>#</div>
                    <div style={{padding:"10px"}}>
                        <input type="text" name="item" onChange={handleOnChange} value={newItem.item} />
                    </div>
                    <div style={{padding:"10px"}}>
                        <input type="number" name="price" onChange={handleOnChange} value={newItem.price} />                        
                    </div>
                    <div>
                        <button onClick={onClickAddButton}>Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Display;