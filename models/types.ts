export interface Crypto{
    id: string,
    image: string,
	symbol: string,
	name: string,
	slug: string,
    market_data: Market_data_values
}

interface Market_data_values{
    price_usd: number,
    percent_change_usd_last_1_hour: number,

}
