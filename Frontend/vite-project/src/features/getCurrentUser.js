const getCurrentUser = async () => {
    try {
        const { data } = await api.get("/me")
        return data
    } catch (error) {
        console.log(error)

    }
}

export default getCurrentUser