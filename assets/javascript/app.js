const topics = ["gaming", "music", "horror", "funny"];


let system = 
{
    buttonPrint: function(inputA){
        //prints buttons using a for loop. adds a numerical id for css manipulation in case.
        for(let i = 0; i < inputA.length; i++){

            let button = $("<button>" + inputA[i] + "</button>");
            button.attr("id", i);
            button.attr("value", inputA[i]);
            $(".buttonContainer").append(button);

        }
        
    },




    displayImages: function(topicInput){
        let search = topicInput;
        const queryURL = `https://api.giphy.com/v1/gifs/search?api_key=OVaM1ofUqUE26I2l1H5ec6voBazampFz&q=${search}&limit=10&offset=0&rating=G&lang=en`



        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            for(let i = 0; i < 10; i++){

                const imgURL = response.data[i].embed_url;
                const image = $("<img>");
                image.attr("src", imgURL);
                image.attr("alt", i);
                $(".results").append(image);


            }



        });









        





    }







}





system.buttonPrint(topics);
system.displayImages("Terry Crews");





$(".buttonContainer").on("click", function() {
    console.log("Registered Click");
    $(".results").empty();
    // system.displayImages(this.val());
    let array = [$(this).attr('id')];
    system.buttonPrint(array);
    console.log($(this).attr('id'));





});