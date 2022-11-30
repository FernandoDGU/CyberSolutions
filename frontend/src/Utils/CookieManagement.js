
export default class CookieManagement{

    setCookie(cookieName, cookieValue){
        var today = new Date();
        var expire = new Date();
        expire.setTime(today.getTime() + 3600000*24*7);
        document.cookie = cookieName+"="+encodeURI(cookieValue) + "; expires="+expire.toGMTString();
    }
    
    getCookie(cookieName){
        let name = cookieName + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) === ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
    }
    
    deleteCookie(cookieName, cookieValue){
        document.cookie = cookieName+"="+encodeURI(cookieValue) + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
}

