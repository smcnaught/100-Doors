$(document).ready(function () {
    var doorsArr = [];
    var toggleArr = [];

    function doorStatusFunc() {
        for (var i = 1; i <= 100; i++) {
            doorsArr.push({ number: i, status: 'closed' });
        }
    }

    function loop100Times() {
        for (var i = 1; i <= 50; i++) {
            if (i == 1) {
                oneByOneFunc();
            } else if (i == 2) {
                twoByTwoFunc();
            } else if (i > 2) {
                threeAndBeyondFunc(i);
            }
        }
    };

    doorsArr[i].status = 'open';


    function writeDoorStatusFunc() {
        for (var i = 0; i < 100; i++) {
            if (doorsArr[i].status == 'open') {
                $('#openDoors').append(i + ', ');
            } else {
                $('#closedDoors').append(i + ', ');
            }
        };
    };

    function toggleDoors() {
        // sort toggleArr
        // var sortedArr = toggleArr.sort();
        // console.log('sorted array', sortedArr);

        // remove duplicates from the array so we can use the 
        // correct .length method.
        // var uniq = sortedArr.reduce(function(a,b){
        //     if(a.indexOf(b) < 0) a.push(b);
        //     return a;
        // },[]);

        // console.log('new small array: ', uniq, sortedArr);


        var counts = {};
        toggleArr.forEach(function (x) {
            counts[x] = (counts[x] || 0) + 1;
        });

        console.log(counts[1]);

        for (var i = 1; i < 101; i++) {
            if (counts[i] % 2 == 0) {
                console.log(i , ": I'm even");
                // door is closed
                doorsArr[i].status = 'closed';
            } else if (counts[i] % 2 !== 0) {
                console.log(i, ": I'm odd");
                // door is open
                doorsArr[i].status = 'open';
            }
        }
        console.log('Im DOOOOORS ARRAY.STATUS!!!', doorsArr);
    };


    function oneByOneFunc() {
        for (var i = 1; i <= 100; i++) {
            console.log(i);
            toggleArr.push(i);
        }
    };

    function twoByTwoFunc() {
        for (var i = 2; i <= 100; i++) {
            console.log(i);
            toggleArr.push(i);
            i++;
        }
    };

    function threeAndBeyondFunc(initialData) {
        for (var i = initialData; i <= 100;) {
            console.log(i);
            toggleArr.push(i);
            i = i + initialData;
        }
    };

    doorStatusFunc();
    loop100Times();
    toggleDoors();
    writeDoorStatusFunc();
});