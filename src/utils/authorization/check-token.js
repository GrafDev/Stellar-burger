

function checkToken(token) {
    const decodedToken = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    let dataToken = new Date(decodedToken.exp * 1000);
    let carentData = new Date(currentTime * 1000);
    console.log(dataToken)
    console.log(carentData)
    console.log(decodedToken.exp > currentTime)
    return decodedToken.exp > currentTime;
}



function jwt_decode(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}

export default checkToken;




























