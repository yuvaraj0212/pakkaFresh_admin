import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import CardRecentOrders from '~/components/shared/cards/CardRecentOrders';
import CardSaleReport from '~/components/shared/cards/CardSaleReport';
import CardEarning from '~/components/shared/cards/CardEarning';
import CardStatics from '~/components/shared/cards/CardStatics';
import ContainerDashboard from '~/components/layouts/ContainerDashboard';
import { useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';
import CardTopCountries from '~/components/shared/cards/CardTopCountries';
import Router from 'next/router';
import { getUser } from '~/components/api/url-helper';

const dashboard = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState('');
    useEffect(() => {
        let data = JSON.parse(sessionStorage.getItem('token'))
        setData(data);
    }, []);
    return (
        <ContainerDashboard title="Dashboard">
            {data ? <section className="ps-dashboard" id="homepage">
                <div className="ps-section__left">
                    <div className="row">
                        <div className="col-xl-8 col-12">
                            <CardSaleReport />
                        </div>
                        <div className="col-xl-4 col-12">
                            <CardEarning />
                        </div>
                    </div>
                    <CardRecentOrders />
                </div>
                <div className="ps-section__right">
                    <CardStatics />
                    <CardTopCountries />
                </div>
            </section>
                :
                <div className="ps-page--404">
                    <figure className="ps-block--notfound">
                        <h3>Ohh! Page not found</h3>
                        <p>
                            It seems we can't find what you're looking for. <br />
                        </p>
                        <p>
                            <strong className="mr-2">Return to</strong>
                            <Link href="/">
                                <a className="ps-btn ps-btn--black ps-btn--rounded ps-btn--sm">
                                    Dashboard
                                </a>
                            </Link>
                        </p>
                    </figure>
                </div>
            }
        </ContainerDashboard>
    );
};

export default dashboard;
