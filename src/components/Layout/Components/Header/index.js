import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/asset/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleQuestion,
    faCloudUpload,
    faCoins,
    faEllipsisVertical,
    faGear,
    faLanguage,
    faSignIn,
    faSignOut,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

import routesConfig from "~/config/routes";
import Button from "~/components/Button/Button";
import Menu from "~/components/Popper/Menu/Menu";
import { faKeyboard } from "@fortawesome/free-regular-svg-icons";
import 'tippy.js/dist/tippy.css'
import Image from "~/components/Image/Image";
import Search from "../Search/Search";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: "English",
        children: {
            title: "Language",
            data: [
                {
                    type: "language",
                    code: "en",
                    title: "English",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Tiếng Việt",
                },

                
            ],
        },
    },

    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Feedback and help",
        to: "/feedback",
    },

    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard shortcuts",
    },
];
function Header() {
   
    const currentUser = true;
    

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case "language":
                //handle change language
                break;
            default:
                break;
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: "View profile",
            to: "/@hoa",
        },

        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: "Get coins",
            to: "/coin",
        },

        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: "Setting",
            to: "/Setting",
        },

        ...MENU_ITEMS,

        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: "Logout",
            to: "/logout",
            separate: true,
        },
    ];
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
            <Link to={routesConfig.home} className={cx("logo-link")}><img src={images.logo} alt="tiktok" /></Link>
                {/* <div className={cx("logo")}>
                    
                </div> */}
                
                {/*Search*/}
                <Search/>
                <div className={cx("actions")}>
                    {currentUser ? (
                        <>
                           <Tippy delay={[0, 200]} content={'Upload video'} placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                           </Tippy>

                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                Log in
                            </Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                            src={'https://img2.thuthuatphanmem.vn/uploads/2018/11/30/anh-dai-dien-anime-dep_104204759.jpg'} 
                            className={cx('user-avatar')} 
                            alt="Nguyễn Văn A"/>
                        ) : (
                            <button className={cx("more-btn")}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
