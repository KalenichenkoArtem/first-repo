let vu_36List = [
    {
        "vagnum": "05806195",  "remtype": "ДР", "vag": "СВ", "tsn": "2022-04-18 09:00:00+03", "tsk": "2022-04-25 09:00:00+03", "snazv": "ЛВЧД_САРАТОВ"
    },
    {
        "vagnum": "05106786",  "remtype": "ДР", "vag": "СВ", "tsn": "2022-03-16 12:00:00+03", "tsk": "2022-03-24 12:00:00+03", "snazv": "ЛВЧД-С"
    },
    {
        "vagnum": "00206995",  "remtype": "ТОР", "vag": "СВ", "tsn": "2022-04-06 15:00:00+03", "tsk": "2022-04-06 17:00:00+03", "snazv": "ВЧД-08"
    },
    {
        "vagnum": "08413734",  "remtype": "ТО-3", "vag": "К", "tsn": "2022-05-31 05:20:00+03", "tsk": "2022-05-31 15:20:00+03", "snazv": "ЛВЧД20"
    },
    {
        "vagnum": "02411601",  "remtype": "ТОР", "vag": "К", "tsn": "2022-05-29 08:00:00+03", "tsk": "2022-05-29 12:00:00+03", "snazv": "ЛВЧД13"
    },
    {
        "vagnum": "06110027",  "remtype": "ТОР", "vag": "К", "tsn": "2022-06-22 08:45:00+03", "tsk": "2022-06-22 11:15:00+03", "snazv": "ВЧД-07"
    },
    {
        "vagnum": "09719832",  "remtype": "ДР", "vag": "К", "tsn": "2022-04-12 03:00:00+03", "tsk": "2022-04-18 03:00:00+03", "snazv": "ЛВЧД-7"
    },
    {
        "vagnum": "02927671",  "remtype": "ТО-3", "vag": "О", "tsn": "2022-04-25 22:00:00+03", "tsk": "2022-04-26 19:00:00+03", "snazv": "ЛВЧ-5"
    }
]

const tbodyStart = document.getElementById('tbodyId');
vu_36List.forEach(tableField => {
    let tableRow = `
            <tr>
            <td>${tableField.vagnum}</td>
            <td>${tableField.remtype}</td>
            <td>${tableField.vag}</td>
            <td>${tableField.tsn}</td>
            <td>${tableField.tsk}</td>
            <td>${tableField.snazv}</td>
            </tr>
            `
    tbodyStart.insertAdjacentHTML('beforeEnd', tableRow);
})