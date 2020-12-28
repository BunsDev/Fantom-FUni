const appConfig = {
    // app title
    name: 'fUNI',
    // app description
    description: 'fUNI',
    // app keywords
    keywords: 'Fantom, fUNI, uniswap',
    // apollo client settings
    apollo: {
        // list of providers. if one of them is unavailable, another is randomly picked
        providers: [
            {
                http: 'https://xapi2.fantom.network/api',
                // for subscriptions
                ws: '',
            },
            {
                http: 'https://xapi3.fantom.network/api',
                // for subscriptions
                ws: '',
            },
            {
                http: 'https://xapi4.fantom.network/api',
                // for subscriptions
                ws: '',
            },
            {
                http: 'https://xapi5.fantom.network/api',
                // for subscriptions
                ws: '',
            },
            {
                http: 'https://xapi6.fantom.network/api',
                // for subscriptions
                ws: '',
            },
        ],
        // index into providers array of default provider or 'random' - takes index randomly
        defaultProviderIndex: 'random',
    },
    // Opera chain id
    chainId: '0xfa',
    // used in links pointing to fantom explorer
    explorerUrl: 'https://explorer.fantom.network/',
    // used in links pointing to ethereum explorer
    ethereumExplorerUrl: 'https://etherscan.io/',
    // used in links pointing to binance explorer
    binanceExplorerUrl: 'https://explorer.binance.org/',
    // BNBridge api config
    bnbridgeApi: {
        // url of api point
        url: 'https://api.bnbridge.exchange/api/v1',
        // auth token
        token: '',
        // use Ethereum chain
        useETH: true,
        // use Binance chain
        useBNB: true,
    },
    //
    useTestnet: false,
    // testnet config
    testnet: {
        // list of providers. if one of them is unavailable, another is randomly picked
        providers: [
            {
                http: 'https://xapi.testnet.fantom.network/api',
                // for subscriptions
                ws: '',
            },
        ],
        // used in links pointing to fantom explorer
        explorerUrl: 'https://explorer.testnet.fantom.network/',
        // chain id for testnet
        chainId: '0xfa2',
    },
    // progressive web application
    usePWA: false,
    // pwa settings
    pwa: {
        // name used in pwa manifest
        name: 'Fantom FUniswap',
    },
    // default options for production build
    build: {
        // output dir for production build
        outputDir: 'dist',
    },
    // app settings
    settings: {
        // list of available currencies displayed in settings view ( https://en.wikipedia.org/wiki/ISO_4217 )
        currencies: ['USD', 'EUR'],
        // defi slippage reserve in percentage
        defaultDefiSlippageReserve: 0.3,
        // default funiswap slippage tolerance in percentage
        defaultFUniswapSlippageTolerance: 0.5,
        // success transaction message will automatically continue to the next step after this number of ms
        autoContinueToAfter: 2000,
    },
};

if (appConfig.useTestnet) {
    appConfig.apollo.providers = appConfig.testnet.providers;
    appConfig.explorerUrl = appConfig.testnet.explorerUrl;
    appConfig.chainId = appConfig.testnet.chainId;
}

module.exports = appConfig;
