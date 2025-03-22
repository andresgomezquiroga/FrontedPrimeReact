import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { TieredMenu } from 'primereact/tieredmenu';
import { useNavigate } from 'react-router-dom';
const TiredMenu = () => {
    const menu = useRef(null);
    const navegate = useNavigate();
    const items = [
        {
            label: "Configuration",
            disabled: true, // This will make the item non-clickable
        },
        {
            separator: true,
        },
        {
            label: "Logout",
            icon: "pi pi-sign-out",
            command: () => {
                navegate('/');
            }
        }
    ];
    return (
        <div className="card flex justify-content-center">
            <TieredMenu model={items} popup ref={menu} breakpoint="767px" />
            <Button icon="pi pi-cog" outlined rounded onClick={(e) => menu.current.toggle(e)} />
        </div>
    )
}

export default TiredMenu
