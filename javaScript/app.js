<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        var bgcolor=new Array("#029FD4","#00FF00","#0000FF","#FFFF00","#00FFFF","#FF00FF")

        document.body.style.background=bgcolor[Math.floor(Math.random()*bgcolor.length)];
    </script>
    <p>The results will be displayed on a window pop-up alert</p>

    <script>
        window.alert("Love you!");
    </script>

    <p id="math"></p>

    <script>
        document.getElementById("math").innerHTML = 12 * 12;
    </script>

    <p id="var"></p>

    <script>
        //variables
        var x = 5;
        var y = 6;
        var z = x + y;
        document.getElementById("var").innerHTML = z;
    </script>

    <p id="obj"></p>
    <script>
        //objects
        var car = {type:"Fiat", model:"500", color:"white"};
        document.getElementById("obj").innerHTML = car.type + " " + car.model + " " + car.color;
    </script>

    <p id="arr"></p>
    <script>
        //arrays
        var cars = ["Saab", "Volvo", "BMW"];
        var own = ["Mel", "Ren"];
        var all = cars.concat(own); //joins two arrays
        cars.pop(); //removes last element
        cars.shift(); //removes first element
        cars.push("Audi"); //adds element to the end
        cars.unshift("Mercedes"); //adds element to the beginning
        cars[3] = "Opel"; //changes the first element
        delete cars[0]; //deletes the first element
        cars.splice(2, 0, "Lamborghini", "Ferrari"); //adds elements to the array
        cars.sort(); //sorts the array in alphabetical order
        cars.reverse(); //reverses the order of the array
        document.getElementById("arr").innerHTML = cars[0];
        document.getElementById("arr").innerHTML = cars.toString();
    </script>

    <script>
        //conditional statements
        var score = 90;

        if (score < 50) {
            document.write("F");
        } 
        else if (score < 70) {
            document.write("D");
        }
        else if (score < 80) {
            document.write("C");
        }
        else if (score < 90) {
            document.write("B");
        }
        else if (score < 100) {
            document.write("A");
        }
        else {
            document.write("Invalid score");
        }
    </script>

    <p id="comp"></p>

    <script>
        //comparison operators
        var x = 6;
        var y = 6;
        document.getElementById("comp").innerHTML = (x == y);
        document.getElementById("comp").innerHTML = (x === y);
        document.getElementById("comp").innerHTML = (x != y);
        document.getElementById("comp").innerHTML = (x !== y);
        document.getElementById("comp").innerHTML = (x > y);
        document.getElementById("comp").innerHTML = (x < y);
        document.getElementById("comp").innerHTML = (x >= y);
        document.getElementById("comp").innerHTML = (x <= y);
    </script>

    <p id="boolean"></p>

    <script></script>

    <script>
        //for loop
        var count;

        for (count = 0; count <= 10; count++) {
            document.write(count + "<br>");
        }
    </script>

    <p id="forInLoop"></p>

    <script>
        //for in loop
        var person = {fname:"Mel", lname:"Garcia", age:20};

        var text = "";
        var x;
        for (x in person) {
            text += person[x] + " ";
        }
        document.getElementById("forInLoop").innerHTML = text;
    </script>

    <script>
        //while loop
        var count = 0;

        while (count <= 10) {
            document.write(count + "<br>");
            count++;
        }
    </script>

    <p id="doWhileLoop"></p>

    <script>
        //do while loop
        var count = 0;

        do {
            document.write(count + "<br>");
            count++;
        }
        while (count <= 10)
        document.getElementById("doWhileLoop").innerHTML = count;
    </script>

    <p id="break"></p>

    <script>
        //break
        var count = 0;

        while (count <= 10) {
            document.write(count + "<br>");
            count++;
            if (count == 5) {
                break;
            }
        }
    </script>

    <p id="continue"></p>

    <script>
        //continue
        var count = 0;

        while (count <= 10) {
            if (count == 5) {
                count++;
                continue;
            }
            document.write(count + "<br>");
            count++;
        }
    </script>

    <p id="function"></p>

    <script>
        //functions
        function myFunction() {
            document.getElementById("function").innerHTML = "Hello World!";
        }
        myFunction();
    </script>

    <!--Js Events-->

    <button onclick="document.getElementById('event').innerHTML = Date()">The time is?</button>

    <p id="event"></p>
</body>
</html>