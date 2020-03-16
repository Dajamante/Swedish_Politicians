function rmNewLines(string){
  return string.replace(/(\r\n|\n|\r)/gm, "");
}

function getJson(string){
  return fetch(string)
      .then((response) => response.json());
}
