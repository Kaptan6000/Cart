import React from 'react';

const CartItem=(props)=>
  {
    const {price,title,qty}=props.product;  
    const {product}=props;
    return (
      <div className='cart-item'>
        <div className='left-block'>
          <img style={styles.image} src={product.img}/>
        </div>
        <div className='right-block'>
          <div style={{fontSize:25}}>{title}</div>
          <div style={{color:"#777"}}>Rs {price}</div>
          <div style={{color:"#777"}}>Qty:{qty}</div> 
          <div className='cart-item-actions'>
              {/* */}
              <img alt='increase' className='action-icons' src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png" onClick={()=>props.OnIncreaseQuantity(props.product)}/>
              <img alt='decrease' className='action-icons' src="https://cdn-icons-png.flaticon.com/512/2920/2920674.png" onClick={()=>props.OnDecreaseQuantity(props.product)}/>
              <img alt='delete' className='action-icons' src="https://cdn-icons-png.flaticon.com/512/3221/3221845.png" onClick={()=>props.OnDeleteProduct(props.product.id)}/>
          </div>
        </div>
      </div>
    );
  }


const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:"#ccc"
    }
}

export default CartItem;