import ratelimit from "../config/upstash.js";



const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-rate-limit");
    if (!success) {
      return res.status(429).json({ message: "Too many requests" });
    }
    next();
  } catch (error) {
    res.status(429).json({ message: "Too many requests" });
  }
};


export default rateLimiter;