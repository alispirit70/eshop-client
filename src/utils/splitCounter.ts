export function splitCounter(x :string | number):string{
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}