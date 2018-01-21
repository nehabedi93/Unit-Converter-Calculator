        var b1 = document.getElementById("celcius-farenheit");
            
        b1.onclick = function()
            {
                var value1 = document.getElementById("text").value;
                result.innerHTML = "Your Result: "+(((value1 * 9 / 5) +32).toFixed(2) +" °F");
            };
            
        var b2 = document.getElementById("farenheit-celcius");
            
            b2.onclick = function()
            {
                var value2 = document.getElementById("text").value;
                result.innerHTML = "Your Result: "+(((value2 - 32) * 5 / 9).toFixed(2) +" °C");
            };
        var b3 = document.getElementById("feet-meters");
            
            b3.onclick = function()
            {
                var value3 = document.getElementById("text").value;
                result.innerHTML = "Your Result: "+((value3 / 3.28).toFixed(2) +" m");
            };
            
        var b4 = document.getElementById("meters-feet");
            
            b4.onclick = function()
            {
                var value4 = document.getElementById("text").value;
                result.innerHTML = "Your Result: "+((3.28084 * value4).toFixed(2) +" ft");
            };
        var b5 = document.getElementById("inches-centimeters");
            
            b5.onclick = function()
            {
                var value5 = document.getElementById("text").value;
                result.innerHTML = "Your Result: "+ ((value5 * 2.54).toFixed(2) +" cm");
            };
        var b6 = document.getElementById("centimeters-inches");
            
            b6.onclick = function()
            {
                var value6 = document.getElementById("text").value;
                result.innerHTML = "Your Result: "+ ((value6 * 0.394).toFixed(2) +" inches");
            };
        var b7 = document.getElementById("pounds-kilograms");
            
            b7.onclick = function()
            {
                var value7 = document.getElementById("text").value;
                result.innerHTML = "Your Result: "+ (( value7 / 2.2 ).toFixed(2) +" Kg");
            };
        var b8 = document.getElementById("kilograms-pounds");
            
            b8.onclick = function()
            {
                var value8 = document.getElementById("text").value;
                result.innerHTML = "Your Result: "+ ((value8 * 2.2).toFixed(2) +" lbs");
            };
        var reset = document.getElementById("clear");
            
            reset.onclick = function()
            {
                var value9 = document.getElementById("text").value = "";
                document.getElementById("text").focus();
                result.innerHTML = "Your Result: ";
            };

