let APIURL = "";

switch (window.location.hostname) {
    case "localhost" || "127.0.0.1" :
        APIURL = "http://localhost4000";
        break;
    case "rjs-my-concert-experience.herokuapp.com" :
        APIURL = "https://rjs-my-concert-experience.herokuapp.com"
}

export default APIURL;