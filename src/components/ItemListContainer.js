import React from 'react';
import { ItemList } from "./ItemList";


const ItemListContainer = () => {
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