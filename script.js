//input to dom
const output = document.getElementById("output-box")
const newsElem= document.querySelector(".row")

//function logic for onclick event
async function movieInfo(){
    try {
        let response = await fetch(`https://api.thenewsapi.com/v1/news/top?api_token=ToJOKb4AUwBfuQkBmPUrkhoemfqiZocbFrSwttpN`)
        const news = await response.json();
       
        for(i=0; i<=news.data.length; i++){
            output.innerHTML+=`
            <div class="col-lg-4 col-sm-2 col-md-3">
            <div class="card" style="width: 21rem;">
            <div class="card-header">
            ${news.data[i].source}
            </div>

            <div class="news-img">
            <img src="${news.data[i].image_url}" class="card-img-top" alt="${news.data[i].title}">
            </div>

            <div class="card-body" id="news-info">
            <p><strong>Heading: </strong> ${news.data[i].title} </p>
            <p><strong>Description: </strong>${news.data[i].description}</p>
            <p><strong>Snippet: </strong>${news.data[i].snippet} </p>
            </div>

            </div>     
            </div>       
            `
        }       

    } catch (error) {
        console.log("No news found")
    }
}
movieInfo();