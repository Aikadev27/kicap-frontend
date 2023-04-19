class Token {
  static get token() {
    return localStorage.getItem("token");
  }

  static set token(_token) {
    localStorage.setItem("token", _token);
  }
}

export default Token;
