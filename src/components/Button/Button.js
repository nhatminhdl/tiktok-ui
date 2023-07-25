import React from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    onClick,
    children,
    primary = false,
    outLine = false,
    small = false,
    large = false,
    text = false,
    disabled = false,
    rounded = false,
    className,
    leftIcon,
    rightIcon,
    ...passProps
}) {
    let Comp = `button`;
    const props = {
    
        onClick,
        ...passProps,
    };

    //Remove event listener when button disable
    if (disabled) {
        // delete props.onClick;

        Object.keys(props).forEach((key)=>{
            if(key.startsWith('on') && typeof props[key] === 'function'){
                delete props[key];
            }

        }) 
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = `a`;
    }
    const classes = cx("wrapper", {
        [className]: className,
        primary,
        outLine,
        small,
        large,
        text,
        disabled,
        rounded,
        
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
