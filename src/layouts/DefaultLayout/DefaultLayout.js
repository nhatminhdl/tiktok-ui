import Header from "~/layouts/Components/Header";
import styles from "./Defaulayout.module.scss";
import classNames from "classnames/bind";
import Sidebar from "../Components/Sidebar";
import PropTypes from 'prop-types'

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("container")}>
                <Sidebar />
                <div className={cx("content")}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default DefaultLayout;
