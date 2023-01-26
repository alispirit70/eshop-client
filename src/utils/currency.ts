export const titleCurrency=(currency:  'tooman'|'rial'|string):string =>{
    if(currency === 'rial') return 'ریال';
    if(currency === 'tooman' )return 'تومان';
    return currency
}