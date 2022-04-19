
        function sum() {
            var firstnum = document.getElementById("firstnum").value;
            var lastnum = document.getElementById("lastnum").value;
            var sum =  Number(firstnum) + Number(lastnum) 
            var reg = /\d/;
            var flag1 = reg.test(firstnum);
            var flag2 = reg.test(lastnum);
            if (!flag1 || !flag2) {
                alert("The input must be a number!");
            }else {
                document.getElementById("sum").innerHTML=sum;
            }
        }

