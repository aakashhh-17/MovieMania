export const timeFormat = (time)=>{
const hours = Math.round(time/60);
const minutes = time % 60;
return `${hours}h ${minutes}m`;
}

export const isoTimeFormat = (dateTime)=>{
    const date = new Date(dateTime);
    const localTime = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    return localTime;
}