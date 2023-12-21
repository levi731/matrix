import moment from "moment"
export function YearsList(name){
    let YearList = []
    let oldYear = 1950
    let currentYear = moment().year()
    for (oldYear ; oldYear <= currentYear + 1 ; oldYear++ ){
        const YearObj =
        {
            value: oldYear,
            id: oldYear,
            name
        }
        YearList.push(YearObj)
    }
    return YearList
}