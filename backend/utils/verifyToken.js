import jwt from 'jsonwebtoken'

const verifyToken = (req, resp, next) => {
  const token = req.cookies.accessToken

  if (!token) {
    return resp.status(401).json({success:false, message:"You are Not Authorize..!"})
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
        return resp.status(401).json({success:false, message:"Token is Invalid..!"})
    }

    req.user = user
    next()
  })
}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.role === 'admin') {
            next()
        }
        else{
            return res.status(401).json({success:false, message:"You are Not Authorize..!"}) 
        }
    });
};

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.role === 'admin') {
            next()
        }
        else{
            return res.status(401).json({success:false, message:"You are Not Authorize..!"}) 
        }
    });
};