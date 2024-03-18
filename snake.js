
var s1=0
var s2=0
var s3=0
var s4=0
var flag=1;
var  pl1="priya"
document.getElementById("a").value=pl1
var pl2="guddu"
document.getElementById("b").value=pl2
var pl3="harleen"
document.getElementById("c").value=pl3
var pl4="palak"
document.getElementById("d").value=pl4


var snakes=[{mouth:29,tail:5},{mouth:43,tail:25},{mouth:66,tail:37},{mouth:98,tail:11}]
var ladder=[{start:13,end:55},{start:22,end:48},{start:39,end:74},{start:63,end:89}]

function dice()
{


    var ran=Math.floor((Math.random()*6)+1)
    document.getElementById("yum").innerText=ran
     
        if(flag==1)
        {
            if(s1+ran<=100 )    
            {
                s1=s1+ran
               for(i=0;i<snakes.length;i++)
                {
                    if(s1==snakes[i].mouth)
                    {
                        s1=snakes[i].tail
                    }
                }
                for(j=0;j<ladder.length;j++)
                {
                 if(s1==ladder[j].start)
                 {
                    s1=ladder[j].end
                 }
                } 
                
                document.getElementById("player1").value=s1
                if(s1==100)
                {
                    
                    document.getElementById("win").value=pl1
                   
                      
                }
            } 
            flag=2
        } 
        else if(flag==2)
        {
            if(s2+ran<=100 )    
            {
                s2=s2+ran
                for(i=0;i<snakes.length;i++)
                {
                    if(s2==snakes[i].mouth)
                    {
                        s2=snakes[i].tail
                    }
                }
                for(j=0;j<ladder.length;j++)
                {
                 if(s2==ladder[j].start)
                 {
                    s2=ladder[j].end
                 }
                } 
                
                document.getElementById("player2").value=s2
                if(s2==100)
                {
                    
                    document.getElementById("win").value=pl2
                    
                }
            } 
            flag=3
        }
        else if(flag==3)
        {
            if(s3+ran<=100 )    
            {
                s3=s3+ran
                for(i=0;i<snakes.length;i++)
                {
                    if(s3==snakes[i].mouth)
                    {
                        s3=snakes[i].tail
                    }
                }
                for(j=0;j<ladder.length;j++)
                {
                 if(s3==ladder[j].start)
                 {
                    s3=ladder[j].end
                 }
                } 
            
                document.getElementById("player3").value=s3
                if(s3==100)
                {
                    
                    document.getElementById("win").value=pl3
                    
                }
            }
            flag=4
        } 
        else if(flag==4)
        {
            if(s4+ran<=100 )    
            {
                s4=s4+ran
                for(i=0;i<snakes.length;i++)
                {
                    if(s4==snakes[i].mouth)
                    {
                        s4=snakes[i].tail
                    }
                }
                for(j=0;j<ladder.length;j++)
                {
                 if(s4==ladder[j].start)
                 {
                    s4=ladder[j].end
                 }
                } 
            
                document.getElementById("player4").value=s4
                if(s4==100)
                {
                 
                    document.getElementById("win").value=pl4
                    
                }
            }
            flag=1
        } 
}
