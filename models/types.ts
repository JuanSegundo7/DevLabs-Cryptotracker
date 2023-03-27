export interface Crypto{
    id: string,
    image: string,
	symbol: string,
	name: string,
	slug: string,
    market_data: Market_data_values
    metrics?: market_data
}

interface market_data {
    market_data: Market_data_values
}

interface Market_data_values{
    price_usd: number,
    percent_change_usd_last_1_hour: number,

}

export interface RootState{
    Cryptos: Array<Crypto>
    Crypto: Object
    Error: string
    UpdatedInfo: Array<Crypto>
}

export interface Navigation{
    navigation: NavigationValues
    route: any
}

interface NavigationValues{
    navigate: Function,
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