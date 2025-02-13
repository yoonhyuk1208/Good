import { Instance } from "."

export const getUserInfo = async (id) => {
    try {
        const { data } = await Instance.get(
            `user/${id}`
        )
        return data
    } catch (error) {
        console.log(error)
    }
}