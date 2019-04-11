var size;
        function incfont(){
            var t = document.getElementById('fontsize').value;
            var x = document.getElementsByClassName("text")
            for (i = 0; i < x.length; i++) {
            x[i].style.fontSize = t+"px";
            }
            size = t;
            document.getElementById("size") .innerHTML = size;
        }