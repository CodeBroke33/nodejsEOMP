import axios from "axios";

function applyToken(token) {
    try {
        if (token) {
            axios.defaults.headers = {
                Authorization: `${token}`
            };
        }
    } catch (error) {
        console.error("Error applying token:", error);
    }
}

export default {
    applyToken
};
