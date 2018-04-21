import React from 'react';
import {Provider} from 'react-redux';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import configStore from '../store/configStore';
import KoaRouter from 'koa-router';
import Routes from './Routes';

import config from '../config/config';
import functions from '../server/functions';

const serverRoutes = new KoaRouter();

serverRoutes.all('*', async (ctx, next) => {

    const context = {}, initState = {};

    if (ctx.url.indexOf('/api') !== 0) {

        const store = configStore(initState);
        const state = store.getState();

        await ctx.render('index', {
            root: ReactDOMServer.renderToString(
                <Provider store={store}>
                    <StaticRouter location={ctx.url} context={context}>
                        {Routes(initState)}
                    </StaticRouter>
                </Provider>
            ),
            state: `${JSON.stringify(state)}`,
            host: ctx.host,
        })
    } else {
        if (config.debug) {
            console.log('start-------' + ctx.url + '---------');
            console.log(ctx.request.body);
            console.log(ctx.request.query);
            console.log('end-------' + ctx.url + '---------')
        }
        await next();
    }

});

export default serverRoutes;