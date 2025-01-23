function fetch(data, url){
    let info = fetch(url);
    return info(data).JSON().stringify();
}