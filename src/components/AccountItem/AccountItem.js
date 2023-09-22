import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "../Image/Image";
import { Link } from "react-router-dom";
import propTypes from "prop-types"

const cx = classNames.bind(styles);
function AccountItem({data}) {
    return (
        <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
            <Image alt={data.full_name}
            src = {data.avatar}
            className={cx("avatar")} />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: propTypes.object.isRequired
}

export default AccountItem;
