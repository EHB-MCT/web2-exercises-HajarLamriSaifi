



async function getAllinfo() {
    let response = await fetch('https://opendata.brussels.be/api/records/1.0/search/?dataset=museums-in-brussels&q=')
    return await response.json()
    .then(data => {
    console.log(data)
    let content = document.getElementById("data")
    let info = data.records[0]
    
    content.innerHTML += `
    <h1> ${info.fields.naam_van_het_museum}</h1>
    <p> ${info.fields.adres}</p>
    <p> ${info.fields.adresse}</p>
    <p> ${info.fields.e_mail}</p>
    <p> ${info.fields.facebook}</p>`
    
    })
    }
    
    getAllinfo();













//async function getAllinfo(){
   // fetch ('https://opendata.brussels.be/api/records/1.0/search/?dataset=museums-in-brussels&q=')
  //  .then(resp => resp.json())
   // .then (data => {
   //     data = data.records
    //    console.log(data)
    //    let content = document.getElementById("info")
            
     //   data.forEach(info => {
            
       //     content.innerHTML += `
       //     <div id="element">

       //     <h1>${naam_van_het_museum}</h1>
      //      <h2>${site_web_website}</h2>
       //     <h3>${e_mail}</h3>
       //     <h4>${adres}</h4>
            
       //     </div>
       //     `
       // });
   // });

   
//}

//getAllinfo();