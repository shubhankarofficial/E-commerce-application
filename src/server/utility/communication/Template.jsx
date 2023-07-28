import React from 'react';

const styles = {

    table: {borderCollapse: "collapse", border: "1px solid black"}
    

  

}

export const Template = ({creditCardDetails, orderDetails}) => (

    <div>
        <h1>
            You got an order!!
        </h1>
        <p>
            {new Date().toLocaleString('en-us')}
        </p>

        <h2>
            Order Details
        </h2>
        <table style={styles.table}>
            <tbody>
                {Object.keys(orderDetails).map((item,i) => (

                    <tr key = {i}>
                        <th>
                            {item}
                        </th>
                        <td>
                            {orderDetails[item]}
                        </td>

                    </tr>
                ))}
            </tbody>
        </table>
        <h2>
            Credit Card Details
        </h2>
        <table style={styles.table}>
            <tbody>
                {Object.keys(creditCardDetails).map((item,i) => (

                    <tr key = {i}>
                        <th>
                            {item}
                        </th>
                        <td>
                            {creditCardDetails[item]}
                        </td>

                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)