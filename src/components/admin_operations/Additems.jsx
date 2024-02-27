import React from 'react';
import "./styling.css";

const Additems = () => {
  return (
    <div>
        <div className="add-main">
            <div className='for-txt'>
                <div className='name-img'>
                    <label htmlFor="">Image of the Plant:
                    <input type="text" name="" id="" />
                    </label>
                    <label htmlFor="">Name & Discribtion:
                    <input type="text" name="" id="" /></label>
                    <label htmlFor="">Plant Type:
                    <input type="text" name="" id="" /></label>
                </div>
                <div className='nor-dis-price'>
                    <label htmlFor="">Price:
                    <input type="text" name="" id="" /></label>
                    <label htmlFor="">Discount if any:
                    <input type="text" name="" id="" /></label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Additems