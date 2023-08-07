import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import {wrapper as PopperWrapper } from "~/components/Popper"
import MenuItems from "./MenuItem";
const cx = classNames.bind(styles);

function Menu({children, items =[]}) {
    const redenderItems = () => {
        return items.map((item ,index)=> (
            <MenuItems key ={index} data={item}/>
        ))
    }
    return (
        <Tippy
            interactive
            // visible
            delay={[0,500]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                       {redenderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
