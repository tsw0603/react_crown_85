import React, { useState } from "react";
import './Directory_85.scss';
import items from "./menu-items-data";
import MenuItem_85 from "./MenuItem_85";

const Directory_85 = () => {
    const [menuItems, setMenuItems] = useState(items);
    console.log('menuItems', menuItems);
    return (
        <div>
            <div className='directory-menu'>
                {menuItems.map((item) => {
                    const { id, name, remoteUrl, size } = item;
                    return (
                        <MenuItem_85
                            id={id}
                            name={name}
                            remoteUrl={remoteUrl}
                            size={size}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Directory_85;