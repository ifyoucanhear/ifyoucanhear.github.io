// ctrl + u
document.onkeydown = function(e) { // ctrl
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {
        return false;
    } else {
        return true;
    }
};

$(document).keypress("u", function(e) { // u
    if (e.ctrlKey) {
        return false;
    } else {
        return true;
    }
});

// ctrl + shift + i & f12
$(document).keydown(function(e) {
    if (e.keyCode == 123) { // f12
        return false;
    } else if (e.ctrlKey && e.shiftKey && e.keyCode == 73) { // ctrl + shift + i
        return false;
    }
});