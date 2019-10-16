import React from 'react';
const AddElements = (props) => {
    console.log(props);
    return (
        <div>

            {/* {props.arra ? <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Amount</td>
                        <td>Remaimng Amount</td>
                    </tr>
                </thead>

                <tbody>

                    props.arra.map((val, i) => (
                      <tr key={i}>
                        <td>{val.name}</td>
                        <td>{val.val}</td>
                        </tr>
                    )
                    )
                
        </tbody>

            </table> : null} */}
        </div>
    )

}
export default AddElements;
