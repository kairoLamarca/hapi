'use strict';

const Hapi = require('@hapi/hapi');

(async () => {
    const server = Hapi.server({
        port: Number(process.env.PORT) || 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (_request, h) => {
            return 'Hello World!';
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
})();

process.on('unhandledRejection', (err) => {
    console.log(err.message);
    process.exit(1);
});
