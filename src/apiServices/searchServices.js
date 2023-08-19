import * as request from "~/ultils/request";


export const searchApi = async (q, type = 'less') => {
    try {
        const res = await request.get(`/users/search`, {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};