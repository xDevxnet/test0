// import { Helmet } from 'react-helmet';
import $ from 'jquery';
window.$ = $;



//Replace Text function		 
$(function () { 
    
    var count = 0; 
    var wordsArray = ["PYTHON", "DJANGO", "REACT", "POSTGRESQL", "BOOTSTRAP", "JAVASCRIPT"]; 
    setInterval(function () { 
        count++; 
        $("#word").fadeOut(500, function () { 
            $(this).text(wordsArray[count % wordsArray.length]).fadeIn(500); 
        }); 
    }, 2000); 

});
