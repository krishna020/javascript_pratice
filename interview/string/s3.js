// title case conversion

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    console.log(str)
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
    }
    console.log(titleCase("GEEKS FOR GEEKS"));