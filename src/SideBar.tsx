import { SideBarMenu } from "./Components/SideBarMenu";
import { SideBarMenuCard, SideBarMenuItem } from './types/types';
import { FcConferenceCall, FcShop, FcFile, FcWorkflow } from "react-icons/fc";

import profileImg from "./img/profile2.png";

function SideBar() {
  const items:SideBarMenuItem[] = [
    {
      id: '1',
      label: 'Clientes',
      icon: FcConferenceCall,
      url: "/Clientes"
    },
    {
      id: '1',
      label: 'Ventas',
      icon: FcShop,
      url: "/Ventas"
    },
    {
      id: '1',
      label: 'Facturas',
      icon: FcFile,
      url: "/Facturas"
    },
    {
      id: '1',
      label: 'Productos',
      icon: FcWorkflow,
      url: "/Productos"
    },
    {
      id: '1',
      label: 'Proveedores',
      icon: FcConferenceCall,
      url: "/Proveedores"
    },
  ];
  const card:SideBarMenuCard  = {
      id: '1',
      displayName: 'Jhoey Ap',
      title: 'Programador',
      photoUrl: profileImg,
      url: "/"
    };
  
  return (
    <div>
      <SideBarMenu items={items} card={card}/>
    </div>
  );
}

export default SideBar;
