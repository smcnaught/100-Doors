$(document).ready(function () {
    var doorsArr = [];
    var toggleArr = [];

    function doorStatusFunc() {
        for (var i = 1; i <= 100; i++) {
            doorsArr.push({ number: i, status: 'closed' });
        }
    };

    function loop100Times() {
        for (var i = 1; i <= 100; i++) {
            if (i == 1) {
                oneByOneFunc();
            } else if (i == 2) {
                twoByTwoFunc();
            } else if (i > 2) {
                threeAndBeyondFunc(i);
            }
        }
    };

    function toggleDoors() {
        var counts = {};
        toggleArr.forEach(function (x) {
            counts[x] = (counts[x] || 0) + 1;
        });

        for (var i = 1; i < 101; i++) {
            if (counts[i] % 2 == 0) {
                $('#closedDoors').append(i + ', ');
            } else if (counts[i] % 2 !== 0) {
                $('#openDoors').append(i + ', ');
            }
        }
    };

    function oneByOneFunc() {
        for (var i = 1; i <= 100; i++) {
            toggleArr.push(i);
        }
    };

    function twoByTwoFunc() {
        for (var i = 2; i <= 100; i++) {
            toggleArr.push(i);
            i++;
        }
    };

    function threeAndBeyondFunc(initialData) {
        for (var i = initialData; i <= 100;) {
            toggleArr.push(i);
            i = i + initialData;
        }
    };

    doorStatusFunc();
    loop100Times();
    toggleDoors();
});