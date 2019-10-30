const topics = ["Gaming", "Music", "Horror", "Funny"];
let y = 10;
let variaHolder;

const system = 
{
    buttonPrint: function(inputA){
        //prints buttons using a for loop. adds a numerical id for css manipulation in case.
        for(let i = 0; i < inputA.length; i++){

            let button = $("<button>" + inputA[i] + "</button>");
            // button.attr("id", i);
            button.attr("value", inputA[i]);
            button.attr("class", "button");
            console.log($(button).val());
            $(".buttonContainer").append(button);

        }
        
    },




    displayImages: function(topicInput){
        variaHolder = topicInput;
        let search = topicInput;
        const queryURL = `https://api.giphy.com/v1/gifs/search?api_key=OVaM1ofUqUE26I2l1H5ec6voBazampFz&q=${search}&limit=10&offset=0&rating=G&lang=en`



        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            for(let i = 0; i < 10; i++){

                const imgURL = response.data[i].images.fixed_height_still.url;
                const image = $("<img>");
                image.attr("src", imgURL);
                image.attr("alt", i);
                image.attr("data-state", "still");
                image.attr("data-still", imgURL);
                image.attr("data-animate", response.data[i].images.fixed_height.url);
                // image.attr("data-animate", `${response.data[i].embed_url} + `);



                image.attr("data-state", "still");
                image.attr("class", "gif col-4");
                
                image.attr("title", `-DATE UPLOADED-: ${response.data[i].import_datetime} || -RATING-: ${response.data[i].rating} || -TITLE-: ${response.data[i].title}`);
                

                $(".results").append(image);
                // $(".results").append(`</br>`);
                $("#meta").text(`Date Uploaded: ${response.data[i].import_datetime}`);
                // $(".results").append(`</br>`);
                $("#meta").text(`Rating: ${response.data[i].rating}`);
                // $(".results").append(`</br>`);
                $("#meta").text(`Title: ${response.data[i].title}`);
                // $(".results").append(`</br>`);
                // $(".results").append(`</br>`);

            }
            $(".results").append(`</br>`);
            $(".results").append(`</br>`);
            let button = $("<button>" + "Load 10 More Images" + "</button>");
            
            
            button.attr("class", "LoadMore");
            console.log($(button).val());
            
            $(".results").append(button);
            

        });









        





    },
    appendButton: function(input){

        // let array = [input];
        // system.buttonPrint(array);
        // $(".results").empty();
        // system.displayImages(this.val());
        // let array = [$(this).attr('id')];
        // system.buttonPrint(array);
        // console.log($(this).attr('id'));
        // console.log(input);
        // system.displayImages(input);

        let button = $("<button>" + input + "</button>");
            // button.attr("id", i);
            button.attr("value", input);
            button.attr("class", "button");
            console.log($(button).val());
            $(".buttonContainer").append(button);


        
    },
    displayExtention: function(topicInput){
        y = y + 10;
        let search = topicInput;
        const queryURL = `https://api.giphy.com/v1/gifs/search?api_key=OVaM1ofUqUE26I2l1H5ec6voBazampFz&q=${search}&limit=${y}&offset=0&rating=G&lang=en`



        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            for(let i = y-10; i < y; i++){

                const imgURL = response.data[i].images.fixed_height_still.url;
                const image = $("<img>");
                image.attr("src", imgURL);
                image.attr("alt", i);
                image.attr("data-state", "still");
                image.attr("data-still", imgURL);
                // image.attr("class", "col-sm-6");
                image.attr("data-animate", response.data[i].images.fixed_height.url);
                // image.attr("data-animate", `${response.data[i].embed_url} + `);



                image.attr("data-state", "still");
                image.attr("class", "gif col-4");
                image.attr("id", "meta");
                image.attr("title", `-DATE UPLOADED-: ${response.data[i].import_datetime} || -RATING-: ${response.data[i].rating} || -TITLE-: ${response.data[i].title}`);

                

                $(".results").append(image);
                // $(".results").append(`</br>`);
                $("#meta").text(`Date Uploaded: ${response.data[i].import_datetime}`);
                // $(".results").append(`</br>`);
                $("#meta").text(`Rating: ${response.data[i].rating}`);
                // $(".results").append(`</br>`);
                $("#meta").text(`Title: ${response.data[i].title}`); 
                // $(".results").append(`</br>`);
                // $(".results").append(`</br>`);

            }
            $(".results").append(`</br>`);
            $(".results").append(`</br>`);
            let button = $("<button>" + "Load 10 More Images" + "</button>");
            
            
            button.attr("class", "LoadMore");
            console.log($(button).val());
            $(".results").append(button);
            

        });









        





    }







}



















system.buttonPrint(topics);
system.displayImages("Terry Crews");




//Append a button that allows you to add a topic button
const x = "Add A Button!"
let button1 = $("<button>" + x + "</button>");
button1.attr("id", x);
button1.attr("value", x);
button1.attr("class", "button1");
console.log($(button1).val());
$(".buttonContainer").append(button1);

























$(".buttonContainer").on("click",".button", function() {
    y = 10;
    console.log("Registered Click");
    console.log(this);
    $(".results").empty();
    // system.displayImages(this.val());
    // let array = [$(this).attr('id')];
    // system.buttonPrint(array);
    // console.log($(this).attr('id'));
    console.log($(this).val());
    system.displayImages($(this).val());





});

$(".button1").on("click", function(){
    //this is the "ADD A BUTTON function"

    console.log("Registered Click");

    const parameter = $("#search-term").val();
    console.log(parameter);





    if(parameter === ""){
        return;
    }
    else{
        let array = [parameter.toString()];
        system.buttonPrint(array);
        $(".results").empty();
        system.displayImages(parameter);
        
        // system.appendButton(parameter);
        return;
    }




});





$(".results").on("click", ".gif", function(){
    console.log("Click Registered");
    
    const state = $(this).attr("data-state");
    console.log(state);
    // const state = $(this).attr("data-state");

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    }else{
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }






});
$(".gif").on("click", function() {
    const state = $(this).attr("data-state");

    if(state === "still") {

      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");

    }else{
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");

    }
  });




  $(".results").on("click", ".LoadMore", function(){
    // y = 10;
    $(".LoadMore").remove();
    console.log("Click Registered");
    system.displayExtention(variaHolder);




});