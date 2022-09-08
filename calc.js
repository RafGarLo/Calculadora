function screen(val) {
    document.getElementById("calcNum").value = val;
};

function showNum(val) {
    document.getElementById("calcNum").value += val;
};

function solve() {
    try {
        screen(eval(document.getElementById("calcNum").value));
    }
    catch (e) {
        screen('Error');
    };
};

function clearMe() {
    document.getElementById("calcNum").value = "";
}; 
