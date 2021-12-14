import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';
import Link from 'next/link';
const HeaderMobile = ({ isDrawerMenu }) => {
    const dispatch = useDispatch();
    const handleOpenDrawer = () => {
        dispatch(toggleDrawerMenu(true));
    };
    const logout = () => {
        sessionStorage.clear();
        return router.push("/login");
    }
    return (
        <header className="header--mobile">
            <div className="header__left">
                <button className="ps-drawer-toggle" onClick={handleOpenDrawer}>
                    <i className="icon icon-menu"></i>
                </button>
                <img src="" alt="" />
            </div>
            <div className="header__center">
                <div style={{ paddingLeft: '11px', color: '#f55d2c', fontSize: '236%' }}>
                    𝔽𝕒𝕣𝕞<span style={{ color: '#9fd040' }}> 𝟞𝟛</span>
                </div>
            </div>
            <div className="header__right">
                <Link href="/login">
                    <a className="header__site-link" onClick={logout}>
                        {/* <span>View your store</span> */}
                        <i className="icon-exit"></i>
                    </a>
                </Link>
            </div>
        </header>
    );
};

export default connect((state) => state.app)(HeaderMobile);
