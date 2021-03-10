import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as React from 'react';
import {ActionButtonProps} from '../action-button/action-button';
import {ThemeDiv} from '../theme-div/theme-div';

import './menu.scss';

export const Menu = (props: {children: React.ReactNode; items: ActionButtonProps[]}) => {
    const [menuVisible, setMenuVisible] = React.useState(false);
    const ref = React.useRef(null);
    React.useEffect(() => {
        document.addEventListener('click', (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setMenuVisible(false);
            }
        });
    });
    return (
        <div style={{position: 'relative'}}>
            <ThemeDiv className='menu' hidden={!menuVisible}>
                {props.items.map((i) => (
                    <div
                        className='menu__item'
                        onClick={(e) => {
                            i.action();
                            e.preventDefault();
                        }}>
                        {i.icon && <FontAwesomeIcon icon={i.icon} />}
                        <div className='menu__item__label'>{i.label}</div>
                    </div>
                ))}
            </ThemeDiv>
            <div ref={ref} onClick={() => setMenuVisible(true)}>
                {props.children}
            </div>
        </div>
    );
};
