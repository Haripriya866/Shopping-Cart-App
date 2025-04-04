import React, {useState,useEffect} from 'react';
import {Plus,Minus} from 'lucide-react'


import './index.css'

const products = [
    { id: 1, name: "Laptop", price: 500 },
    { id: 2, name: "Smartphone", price: 300 },
    { id: 3, name: "Headphones", price: 100 },
    { id: 4, name: "Smartwatch", price: 150 },
  ];
  
  const freeGift = { id: 99, name: "Wireless Mouse", price: 0 };
  const THRESHOLD = 1000;
  

const Cart=()=>{
    const [cart,setCart]=useState([])

    const addToCart=(product)=>{
        setCart((prevCart)=>{
            const exists=prevCart.find((item)=>item.id===product.id);
            if(exists){
                return prevCart.map((item)=>
                    item.id===product.id?{...item,quantity:item.quantity+1}:item
                );
            }else{
                return [...prevCart,{...product,quantity:1}];
            }
        });
    };

    const removeFromCart=(product)=>{
        setCart((prevCart)=>{
            return prevCart.map((item)=>
            item.id===product.id?{...item, quantity:item.quantity-1}:item)
            .filter((item)=>item.quantity>0)
        })
    }
   

    const getSubtotal=()=>{
        return cart.reduce((sum,item)=>{
            if(item.id===freeGift.id) return sum;
            return sum+item.price*item.quantity;
        },0);
    };

    const subtotal=getSubtotal();
    const qualifiesForGift=subtotal>=THRESHOLD;
    const progress=Math.min((subtotal/THRESHOLD)*100,100);
    const amountRemaining=THRESHOLD-subtotal;
    const cartIsEmpty=cart.length===0;

    const Progress = ({ value }) => {
        return (
            <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: `${value}%` }}></div>
            </div>
        );
    };

    useEffect(()=>{
        setCart((prevCart)=>{
            const hasGift=prevCart.find((item)=>item.id===freeGift.id);
            if(qualifiesForGift && !hasGift){
                return [...prevCart, {...freeGift,quantity:1}];
            }
            if (!qualifiesForGift && hasGift){
                return prevCart.filter((item)=>item.id!==freeGift.id);
            }
            return prevCart
        });
    },[qualifiesForGift])

    


    return(
        <div className='app-container'>
            <div className='top-container'>
                <h2 className='products-heading'>Products</h2>
                <ul className='products-container'>
                {products.map((product)=>(
                    <li className='product-item' key={product.id}>
                        <h3 className='product-name'>{product.name}</h3>
                        <p className='product-price'>{product.price}</p>
                        <button type='button' className='add-to-cart-button'
                        onClick={()=>addToCart(product)}>
                            Add to Cart
                        </button>
                    </li>
                ))}
                </ul>
            </div>
            <div className='cart-summary-container'>
                <h2 className='cart-summary-heading'>Cart Summary</h2>
                <div className='cart-summary'>
                    <div className='summary-subtotal-container'>
                        <p className='sub-total-heading'>Subtotal:</p>
                        <p className='sub-total'>₹{subtotal}</p>
                    </div>
                    <hr className='horizontal-line' />
                    
                        {(!qualifiesForGift) && (
                            <div>
                                <p className='progress-bar-text'>Add ₹{amountRemaining} more to get a FREE Wireless Mouse!</p>
                                <Progress value={progress}/>
                            </div>
                        )}
                        {
                            qualifiesForGift && (
                                <div>
                                    <p className='unlock-free-gift-text'>You got a free Wireless Mouse!</p>
                                </div>
                            )
                        }
                </div>
            </div>
            <div className='cart-items-container'>
                <h2 className='cart-items-heading'>Cart Items</h2>
                {cartIsEmpty?(
                    <div className='empty-cart-item-container'>
                        <p className='empty-cart-description'>Your cart is empty</p>
                        <p className='empty-cart-description'>Add some products to see them here!</p>
                    </div>
                ):
                (
                    <ul className='cart-items'> 
                    {cart.map((item)=>(
                        <li key={item.id} className='cart-item'>
                            <div className='items-container'>
                                <p className='item-name'>{item.name}</p>
                                <p className='item-price'>₹{item.price} x {item.quantity} = ₹{item.price*item.quantity}</p>
                            </div>
                            {item.id !==freeGift.id && (
                                    <div className='buttons-container'>
                                    <button type='button' className='minus-button' size='icon' onClick={()=>removeFromCart(item)}>
                                        <Minus size={16} />
                                    </button>
                                    <span className='quantity'>{item.quantity}</span>
                                    <button type='button' className='plus-button' size='icon' onClick={()=>addToCart(item)}>
                                        <Plus size={16} />
                                    </button>
                                </div>
                            )}
                            {item.id===freeGift.id && (
                        <span className='free-gift-button'>FREE GIFT</span>
                    )}      
                        </li>
                    ))}
                    

                    </ul>
                )}

            </div>

        </div>
    )

}
export default Cart