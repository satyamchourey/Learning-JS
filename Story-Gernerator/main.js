var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');
var us = document.getElementById('us');


var storyData=["I , Basanti hate Donald Trump",
               "Basanti Loves Baseball"  ,
               "Basanti is either Black or Racist"
              ];
   
    

            function Generator(){

            
            var name = customName.value;
            var newStory = storyData.slice(",");
           
          for (i=0;i<newStory.length;i++){
              newStory[i]=newStory[i].replace("Basanti",name);
          }
            story.textContent=newStory[Math.floor(Math.random()*newStory.length)];
                
                            
            
        }
    
           randomize.addEventListener("click",Generator);