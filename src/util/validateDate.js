export default function (date) {
    date = new Date(date);
    return date instanceof Date && !isNaN(date);
}