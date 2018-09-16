var b=[25,14,22];
let i=0;
while(i<b.length-2)
{
    if(b[i]>b[i+2])
    {
        if(b[i]>b[i+2])
          {
            console.log("max of 3 numbers "+b[0]+" "+b[1]+" "+b[2]+" "+"is" +b[i] );
        }
    }
    else if(b[i+1]>b[i+2])
    {
      console.log("max of 3 numbers "+b[0]+" "+b[1]+" "+b[2]+" "+"is" +b[i+1]); 
    }
    else
    {
        console.log("max of 3 numbers "+b[0]+" "+b[1]+" "+b[2]+" "+"is" +b[b.length-1]);
    }
    i++;
}