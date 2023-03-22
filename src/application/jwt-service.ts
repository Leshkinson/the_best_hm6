import jwt from 'jsonwebtoken'

const jtwSecret = process.env.JWT_secret || '123'

export const jwtService = {

    async createJWT(user: any){
        const token = jwt.sign({userId: user.id}, jtwSecret, {expiresIn: '1h'}) //expiresIn вребя работы токена
        return {accessToken : `Bearer ${token}`}

    },

    async getUserIdByToken(token:string) {
        try {
            const result:any = jwt.verify(token, jtwSecret)
            return result.userId
        } catch (error) {
            return null
        }
    }
}