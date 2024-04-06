import { useHasUser } from "@/routes/PrivateRoutes";
import axios from "axios";

export async function getBilling(date_init, date_end) {
    const token = useHasUser(true);
    const response = await axios.get(
        import.meta.env.VITE_SERVER_URI + "/financeiro/faturamento",
        {
            params: {
                datafrom: date_init,
                datato: date_end,
            },
            headers: {
                "jwt-agent": token,
            },
        }
    );
    return { faturamento: response.data };
}

export async function getShippingTwoDays() {
    const token = useHasUser(true);
    const response = await axios.get(
        import.meta.env.VITE_SERVER_URI + "/envio/hjamanha",
        {
            headers: {
                "jwt-agent": token,
            },
        }
    );
    return { envios: response.data };
}

export async function getTopFive() {
    const token = useHasUser(true);
    const response = await axios.get(
        import.meta.env.VITE_SERVER_URI + "/produto/top5",
        {
            headers: {
                "jwt-agent": token,
            },
        }
    );
    return { topCinco: response.data };
}

export async function getSales() {
    const token = useHasUser(true);
    const response = await axios.get(
        import.meta.env.VITE_SERVER_URI + "/produto/vendas",
        {
            headers: {
                "jwt-agent": token,
            },
        }
    );
    return { vendas: response.data };
}

export async function getConversion() {
    const token = useHasUser(true);
    const response = await axios.get(
        import.meta.env.VITE_SERVER_URI + "/usuario/conversao",
        {
            headers: {
                "jwt-agent": token,
            },
        }
    );
    return { conversao: response.data };
}