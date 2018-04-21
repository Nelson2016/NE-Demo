const isDev = process.env.NODE_ENV === 'development';

export default {
    debug: isDev,

    dev: {
        port: 3030,
    },
    prod: {
        port: 8090
    },
    common: {
        breadcrumb: {
            admin: {
                admin: {name: "首页", path: "/admin"},
            },
            client: {
                client: {name: "首页", path: "/client"},
            }
        }
    }
}