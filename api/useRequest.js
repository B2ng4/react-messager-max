import {useState} from "react";

export function useRequest() {
    const [loading, setLoading] = useState(false)

    const request = async (method) => {
        try {
            setLoading(true)
            return (await method());
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false);
        }
    }

    return {loading, request}
}