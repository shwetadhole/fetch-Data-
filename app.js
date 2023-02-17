
fetch("https://production-tw-frontend.thesportstak.com//v1/feed?page=1&limit=25&tags=Soccer_750#")
.then((data)=> {
//console.log(data);
return data.json();
}).then((completedata)=>{
 // console.log(completedata);
  let data1 ="";
  completedata.map((values)=>{
    data1+= `

  <div class="example-1 card">
    <div class="vedio">
        <video class="vedio1" width="500" height="320" controls>
             <source src="${values.media.variants[0].url}">
        </video>
	  </div>
      
      <div class="data">
        
          <h1 class="author">${values.author.location}</h1>
          <h1 class="title"><a href="#" class="cardTitle">${values.author.description}</a></h1>
          <p class="text">${values.text}</</p>
        
     </div>
      
  </div>`
  });
document.getElementById("cards").innerHTML=data1;


}).catch((err)=>{
  console.log(err);
})




