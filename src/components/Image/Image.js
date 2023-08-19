import { useState, forwardRef } from "react";
import images from "~/asset/images";
import styles from "./Image.module.scss";
import classNames from "classnames";

console.log(images.noImage);

const Image = forwardRef(({ src, alt, className, fallBack : customFallBack = images.noImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState("");
    const handleError = () => {
        setFallBack(customFallBack);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
