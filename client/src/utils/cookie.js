import Cookies from "universal-cookie";

const cookies = new Cookies()
// Function to set a cookie
export function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  cookies.set(name, value, { expires });
}
  
  // Function to get a cookie value by name
 export function getCookie(name) {
    const cookie = cookies?.get(name);
    if (cookie) {
      return cookie;
    }
    return null;
  }