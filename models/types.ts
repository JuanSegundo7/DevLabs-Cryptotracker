export interface Crypto{
    id: string,
    image: string,
	symbol: string,
	name: string,
	slug: string,
    market_data: MarketDataValues
    metrics?: marketData
}

interface marketData {
    market_data: MarketDataValues
}

interface MarketDataValues{
    price_usd: number,
    percent_change_usd_last_1_hour: number,

}

export interface RootState{
    Cryptos: Crypto[]
    Crypto: Object
    Error: string
    ApiError: string
    UpdatedInfo: Crypto[]
}

export interface Navigation{
    navigation: NavigationValues
    route: any
}

export interface NavigationValues{
    navigate: (route: string, object?: Object) => void ,
    addListener: Function
}

export interface Route {
    route: RouteValues

}

interface RouteValues{
    params: CryptoRoute
}
  

interface CryptoRoute {
    crypto: Crypto
}
