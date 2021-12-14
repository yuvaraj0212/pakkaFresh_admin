import React from 'react';

const FooterCopyright = () => {
    return (
        <div className="ps-copyright">
            {/* <img src="/img/logo.png" alt="" /> */}
            <div style={{ paddingLeft: '11px', color: '#f55d2c', fontSize: '297%' }}>
                𝔽𝕒𝕣𝕞<span style={{ color: '#9fd040' }}> 𝟞𝟛</span>
            </div>
            <p>
                &copy;2020 Marfury marketplace. <br /> All rights reversed.
            </p>
        </div>
    );
};

export default FooterCopyright;
