import React, { useState } from 'react';

const ItemList = require('./ItemList');


const ItemListContainer = () => {
    const [count, setCount] = useState(0);


    const click = (handle) => {
        if (handle === 'agregar') {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }
    };
    return (
        <div>
            <ul>
                {ItemList.map((item, index) => {
                    return (
                        <li key={index}>
                            <ul>
                                <li>
                                    {item.nombre}
                                </li>
                                <li>
                                    {item.tipo}
                                </li>
                                <li>
                                    {item.variedad}
                                </li>
                                <li>
                                    {item.bodega}
                                </li>
                                <li>
                                    {item.origen}
                                </li>
                                <li>
                                    <li>
                                        {item.stock}
                                        <button onClick={() => click('agregar')}>Agregar al Carrito</button>
                                        <h6>{count}</h6>
                                        <button onClick={() => click('quitar')}>Quitar del Carrito</button>
                                    </li>
                                </li>
                            </ul>
                        </li>
                    );
                }
                )
                }
            </ul>

        </div>
    );
};

export default ItemListContainer