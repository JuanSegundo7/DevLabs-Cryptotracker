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


export interface Navigation{
    navigation: Function,
    addListener: Function

}

export interface RootState{
    Cryptos: Array<Crypto>
    Crypto: Object
    Error: string
    UpdatedInfo: Array<Crypto>
}