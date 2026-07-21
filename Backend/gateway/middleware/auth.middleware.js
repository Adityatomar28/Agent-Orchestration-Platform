import redis from "../../shared/redis/redis.js"

const protect = async (req, res, next) => {
    try {
        const sessionId = req.cookies?.session
        if (!sessionId) {
            return res.status(400).json({ message: "session not found" })

        }
        const session = await redis.get(`session:${sessionId}`)
        if (!session) {
            return res.status(400).json({ message: "sesion expired need to login again" })
        }
        req.user = JSON.parse(session)
        next()
    } catch (error) {
        return res.status(500).json({ message: `middleware error ${error}` })
    }
}

export default protect