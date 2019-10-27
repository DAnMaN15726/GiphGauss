const topics = ["gaming", "music", "horror", "funny"];



let system = 
{
    buttonPrint: function(inputA){
        //prints buttons using a for loop. adds a numerical id for css manipulation in case.
        for(let i = 0; i < inputA.length; i++){

            let button = $("<button>" + inputA[i] + "</button>");
            button.attr("id", i);
            $(".buttonContainer").append(button);

        }
        
    },




    displayImages: function(topicInput){

        





    }







}





system.buttonPrint(topics);

    