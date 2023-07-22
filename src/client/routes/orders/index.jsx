import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const OrderRoute= ({
    message,
    ornament,
    flavor,
    size,
    handleChangeOrderDetail
}) => (
    <div>
        <h2>
            Place your Order!!

        </h2>
        <div>
            <h3>
                Size
            </h3>
            <div>
                <input type="radio" name="size" checked={size === "SMALL"}
                onChange= {()=> handleChangeOrderDetail("size", "SMALL")} 
                />
                <label htmlFor="">Small</label>
            </div>

            <div>
                <input type="radio" name="size" checked={size === "MEDIUM"}
                onChange= {()=> handleChangeOrderDetail("size", "MEDIUM")}
                 />
                <label htmlFor="">Medium</label>
            </div>

            <div>
                <input type="radio" name="size" checked={size === "LARGE"}
                onChange= {()=> handleChangeOrderDetail("size", "LARGE")} 
                />
                <label htmlFor="">Large</label>
            </div>
        </div>
        <div>
            <h3>
                Flavor
            </h3>
            <div>
                <input type="radio" name="flavor" checked={flavor === "STRAWBERRY"} 
                onChange= {()=> handleChangeOrderDetail("flavor", "STRAWBERRY")}
                />
                <label htmlFor="">Strawberry</label>
            </div>

            <div>
                <input type="radio" name="flavor" checked={flavor === "CHOCOLATE"} 
                onChange= {()=> handleChangeOrderDetail("flavor", "CHOCOLATE")}
                />
                <label htmlFor="">Chocolate</label>
            </div>

            <div>
                <input type="radio" name="flavor" checked={flavor === "CAPPUCINO"}
                onChange= {()=> handleChangeOrderDetail("flavor", "CAPPUCINO")}
                />
                <label htmlFor="">Cappucino</label>
            </div>
        </div>
        <div>
            <h3>
                Ornament
            </h3>
            <div>
                <input type="radio" name="ornament" checked={ornament === "NONE"} 
                onChange= {()=> handleChangeOrderDetail("ornament", "NONE")}
                />
                <label htmlFor="">None</label>
            </div>

            <div>
                <input type="radio" name="ornament" checked={ornament === "RACECAR"}
                onChange= {()=> handleChangeOrderDetail("ornament", "RACECAR")}
                />
                <label htmlFor="">Racecar</label>
            </div>

            <div>
                <input type="radio" name="ornament" checked={ornament === "BARBIE"}
                onChange= {()=> handleChangeOrderDetail("ornament", "BARBIE")}
                />
                <label htmlFor="">Barbie</label>
            </div>
        </div>
        <div>
            <h3>
                Personal Message
            </h3>
            <input type="text" value={message} 
            onChange= {(e)=> handleChangeOrderDetail("message", e.target.value)}
            />
        </div>
        <Link to= "./checkout"> 
        <button>
            Checkout Here!
        </button>
        </Link>
    </div>
)

export const WrapperOrderRoute = connect(
    function mstp(state){

        console.log("Here's the state", state);

        return {...state.orderDetails}

    },
    function mdtp(dispatch){
        return {
            handleChangeOrderDetail(property,value) {
                dispatch({type: "ORDER_DETAIL_CHANGED",property,value})
            }
        }
    }
)(OrderRoute);