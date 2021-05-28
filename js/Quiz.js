class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
    background("yellow");
    fill(0);
    textSize(30);
    text("Result of the quiz",340,50)
    
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();
    

    //write condition to check if contestantInfor is not undefined
    if(allContestants!==undefined){
      var displayCause=130;
      fill("blue");
      textSize(20);
      text("Contestant who has answered correctly the name will be displayed in green otherwise in red",10,230)
      for(var plr in allContestants){
        var correctAns="2";
        if(correctAns===allContestants[plr].answer)
        fill("green")
        else{
          fill("red");
          displayCause+=130
          text(allContestants[plr].name+":"+allContestants[plr].answer,170,displayCause);   
        }
      }
           
displayCause+=130
text(allContestants[plr].name+":"+allContestants[plr].answer,170,displayCause);   
}


  
} 

}

