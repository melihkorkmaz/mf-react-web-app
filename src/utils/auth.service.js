import Auth0Lock from 'auth0-lock';


const Auth = {
    lock: new Auth0Lock("kVaSrUmXfq9bXbOubTCESBjnCi6qxA62", "melih.auth0.com", {
    }),
    login: () => Auth.lock.show(),
    isAuthenticated: () => {
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    },
    onAuthenticated: (authResult, error, callback) => {
        Auth.lock.getUserInfo(authResult.accessToken, (error, profile) => {
            if (error) {
                // Handle error
                console.log("ERROR", error);
                return;
            }
            localStorage.setItem("accessToken", authResult.accessToken);
            localStorage.setItem("token", authResult.idToken);
            localStorage.setItem("profile", JSON.stringify(profile));
            let expiresAt = JSON.stringify((authResult.idTokenPayload.exp * 1000) + new Date().getTime());
            localStorage.setItem('expires_at', expiresAt);
            callback();
        });
    },
    logout: () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("token");
        localStorage.removeItem("profile");
        localStorage.removeItem('expires_at');
    }
}
export default Auth;