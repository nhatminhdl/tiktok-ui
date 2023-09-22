import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import {wrapper as PopperWrapper } from "~/components/Popper"
import MenuItems from "./MenuItem";
import Header from "./Header";
import { useState } from "react";
import PropTypes from 'prop-types'
const cx = classNames.bind(styles);
const defautFn = () => {}

function Menu({children, items =[], onChange = defautFn, hideOnClick= false,}) {

    const [history, setHistory] = useState([{data: items}]);

    const current = history[history.length - 1]

    const redenderItems = () => {
        return current.data.map((item ,index)=> {
            const isParent = !!item.children
          return  <MenuItems key ={index} data={item} onClick ={()=>{
                if (isParent) {
                    setHistory(prev => [...prev, item.children ]);
                }else{
                    onChange(item);
                }
          }}/>
        })
    }

    const handleBack = ()=>{
        setHistory(prev => prev.slice(0, prev.length - 1))
    }

    const renderResult = (attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
               {history.length > 1 && 
               <Header
                    title={current.title}
                    onBack={handleBack}
               />
               }
               <div className={cx('menu-body')}>{redenderItems()}</div>
            </PopperWrapper>
        </div>
    )

    const handleResetToFirstPage = ()=>  setHistory(prev => prev.slice(0, 1))
    return (
        <Tippy
            
            interactive
            //visible
            delay={[0,500]}
            offset={[12,8]}
            hideOnClick = {hideOnClick}
            placement="bottom-end"
            render={renderResult}
            onHide={handleResetToFirstPage}

           
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
}

export default Menu;
