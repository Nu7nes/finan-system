import { format, formatISO, setHours, setMinutes } from "date-fns";

export function getTodayDateToApi() {
    const today = format(new Date(), "yyyy-MM-dd");
    const date_init =
        today +
        "T" +
        formatISO(setHours(setMinutes(today, 0), 0), {
            representation: "time",
        });
    const date_end =
        today +
        "T" +
        formatISO(setHours(setMinutes(today, 59), 23), {
            representation: "time",
        });
    return { date_init, date_end };
}

export function correctTimeZone(dataString) {
    const data = new Date(dataString); // Converter a string para um objeto Date
    const offset = data.getTimezoneOffset() * 60000; // Calcular o deslocamento em milissegundos
    const dataCorrigida = new Date(data.getTime() + offset); // Adicionar o deslocamento à data

    return dataCorrigida;
}
