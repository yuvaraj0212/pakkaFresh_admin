import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import FooterCopyright from '~/components/shared/footers/FooterCopyright';
import MenuSidebar from '~/components/shared/menus/MenuSidebar';
import WidgetEarningSidebar from '~/components/shared/widgets/WidgetEarningSidebar';
import WidgetUserWelcome from '~/components/shared/widgets/WidgetUserWelcome';
import Link from 'next/link';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';

const ContainerDefault = ({ children, title }) => {
    let titleView;
    if (title !== undefined) {
        titleView = process.env.title + ' | ' + title;
    } else {
        titleView = process.env.title + ' | ' + process.env.titleDescription;
    }
    const [data, setData] = useState('');
    useEffect(() => {
        let data = JSON.parse(sessionStorage.getItem('token'))
        setData(data);
    }, []);
    return (<>
        {data ?<div className="martfury-admin">
            <Head>
                <title>{titleView}</title>
            </Head>
            <main className="ps-main">
                <div className="ps-main__sidebar">
                    <div className="ps-sidebar">
                        <div className="ps-sidebar__top">
                            <WidgetUserWelcome />
                            <WidgetEarningSidebar />
                        </div>
                        <div className="ps-sidebar__content">
                            <div className="ps-sidebar__center">
                                <MenuSidebar />
                            </div>
                        </div>
                        <div className="ps-sidebar__footer">
                            <FooterCopyright />
                        </div>
                    </div>
                </div>
                <div className="ps-main__wrapper">{children}</div>
            </main>
        </div>
        :
        <div className="ps-page--404">
            <figure className="ps-block--notfound">
                <h3>Ohh! Page not found</h3>
                <p>
                    Please login !! . <br />
                </p>
                <p>
                    <strong className="mr-2">Return to</strong>
                    <Link href="/">
                        <a className="ps-btn ps-btn--black ps-btn--rounded ps-btn--sm">
                            login
                        </a>
                    </Link>
                </p>
            </figure>
        </div>
    }
    </>);
};

export default ContainerDefault;
