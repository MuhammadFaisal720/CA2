
function getdata()
{
    var result;                     //variable to store response data    

    fetch("https://api.covid19api.com/summary", {           //api call (returns 248 countries data regarding COVID-19)
        "method": "GET",
    })
    .then(function (data) {                                 //extracting json from response
        return data.json();     
    })
    .then(function (response) {

        result = response['Countries'];                     //saving countries list from response to result
        for (index = 0; index < 200; index++) {             //loop to create html rows
            var row_html = `                                
            <td>`+result[index]['Country']+`</td>
            <td>`+result[index]['CountryCode']+`</td>
            <td>`+result[index]['NewConfirmed']+`</td>
            <td>`+result[index]['TotalConfirmed']+`</td>
            <td>`+result[index]['TotalDeaths']+`</td>
            <td>`+result[index]['TotalRecovered']+`</td>
            <td>`+result[index]['Date']+`</td>
            `;                                              //html to create row containing 'td' columuns and populate it with data of one country                                              
            
            var rw = document.getElementById('covidtable'); //getting outer html table element
            var newrow = document.createElement('tr');      //creating a new row using tag 'tr'
            newrow.innerHTML = row_html;                    //placing all the columns in current row
            rw.appendChild(newrow);                         //appending outer html table element
            
            
        } 
       
    })
       
}

getdata();