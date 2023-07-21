import React from 'react';
import { Link } from 'react-router-dom';

export const OrderRoute= () => (
    <div>
        <h2>
            Place your Order!!

        </h2>
        <div>
            <h3>
                Size
            </h3>
            <div>
                <input type="radio" name="size" />
                <label htmlFor="">Small</label>
            </div>

            <div>
                <input type="radio" name="size" />
                <label htmlFor="">Medium</label>
            </div>

            <div>
                <input type="radio" name="size" />
                <label htmlFor="">Large</label>
            </div>
        </div>
        <div>
            <h3>
                Flavor
            </h3>
            <div>
                <input type="radio" name="flavor" />
                <label htmlFor="">Strawberry</label>
            </div>

            <div>
                <input type="radio" name="flavor" />
                <label htmlFor="">Chocolate</label>
            </div>

            <div>
                <input type="radio" name="flavor" />
                <label htmlFor="">Cappucino</label>
            </div>
        </div>
        <div>
            <h3>
                Ornament
            </h3>
            <div>
                <input type="radio" name="ornament" />
                <label htmlFor="">None</label>
            </div>

            <div>
                <input type="radio" name="ornament" />
                <label htmlFor="">Racecar</label>
            </div>

            <div>
                <input type="radio" name="ornament" />
                <label htmlFor="">Barbie</label>
            </div>
        </div>
        <div>
            <h3>
                Personal Message
            </h3>
            <input type="text" />
        </div>
        <Link to= "./checkout"> 
        <button>
            Checkout Here!
        </button>
        </Link>
    </div>
)