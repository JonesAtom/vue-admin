module.exports = {
    // publicPath: './',
    // chainWebpack: config => {
    //     config.resolve.alias
    //         .set('@', resolve('src'))
    // },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}