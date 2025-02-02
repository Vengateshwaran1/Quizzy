import axios from "axios";

const API_URL = "/api/Uw5CrX";

export const fetchData = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error.message);
        throw new Error("Failed to fetch data. Please try again.");
    }
};
