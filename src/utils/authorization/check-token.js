import jwt_decode from "jwt-decode";

function checkToken(token) {
    const decodedToken = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp > currentTime;
}


export default checkToken;




























