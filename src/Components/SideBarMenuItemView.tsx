import { SideBarMenuItem } from "../types/types";
import { classNames } from "../util/classes";
import './SideBarMenuItemView.scss';
import { Link } from "react-router-dom";

interface SideBarMenuItemViewProps{
    item: SideBarMenuItem;
    isOpen: boolean;
}

export function SideBarMenuItemView({item, isOpen}: SideBarMenuItemViewProps) {
    return <div className='SideBarMenuItemView'>
        <Link to={item.url} style={{ textDecoration: 'none', backgroundColor: 'transparent'}}>
            <a href={item.url}>
                <div className={classNames('ItemContent', isOpen? '': 'collapsed')}>
                    <div className="icon">
                        <item.icon size="32" />
                    </div>
                    <span className="label">{item.label}</span>
                </div>
            </a>
        </Link>
        
        {
            !isOpen? <div className="tooltip">{item.label}</div> : ""
        }
    </div>
}