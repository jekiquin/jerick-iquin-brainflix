export function dateFormatter(timestamp) {
    const MILLISECONDS_CONVERTER = {
        year: 1000*60*60*24*30*12,
        month: 1000*60*60*24*30,
        day: 1000*60*60*24,
        hour: 1000*60*60,
        minute: 1000*60,
    };

    const timeNow = new Date().getTime();
    const posted = new Date(timestamp).getTime();
    const timeDiff = timeNow - posted;
    let timeMessage = 'Posted just now.';
    for (let dateKey in MILLISECONDS_CONVERTER) {
        const timeConvertFloor = Math.floor(timeDiff / MILLISECONDS_CONVERTER[dateKey]);
        const timeConvertRound = Math.round(timeDiff / MILLISECONDS_CONVERTER[dateKey]);
        if (timeConvertFloor > 0) {
            timeMessage = `Posted ${timeConvertRound} `;
            timeMessage += timeConvertRound > 1 ? `${dateKey}s ago.` : `${dateKey} ago.`;
            break;
        }
    }
    return(timeMessage);
}