import { addUser } from "@/store/slices/userSlice";
import axios from "axios";

export async function authUserCode(code, dispatch, navigate) {
    const uri = import.meta.env.VITE_REDIRECT_URI;
    try {
        if (code) {
            const response = await axios.get(
                import.meta.env.VITE_SERVER_URI + "/auth",
                {
                    headers: {
                        "code-agent": code,
                        "redict-agent": uri,
                    },
                }
            );
            if (response.status === 200) {
                dispatch(addUser(response.data));
                localStorage.setItem("token", response.data.jwt);
                navigate("/painel/dashboard/inicial");
            }
        }
    } catch (error) {
        console.log(error);
    }
}