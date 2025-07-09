export const timeFormat = (time)=>{
const hours = Math.round(time/60);
const minutes = time % 60;
return `${hours}h ${minutes}m`;
}
