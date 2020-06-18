function password_string(size){
    var str = "";
    for (var i = 0; i < size; i++){
        str += random_character();
    }
    $( "#password" ).html(str);
}
function random_character() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%=-_+[]{}()?<>:\/~!&*^";
    return chars.substr( Math.floor(Math.random() * chars.length), 1);
}
