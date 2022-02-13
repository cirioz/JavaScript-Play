// Print all prime numbers from 0 to 1000

// let count=0;
// let i,j ;
// for(j=2;j<=1000;j++)
// {
// for( i=1;i<=j;i++)
// {
//   if(j%i==0)
//   count++
  
// }

// if(count==2)

// console.log(j)
// count=0


  
// }

let i,j;
for(j = 2; j < 1000; j++)
{
    var prime = true;
    for(i = 2; i < j; i++)
    {
        if(j % i == 0)
        {
            prime = false;
            break;
        }
    }
    if (prime)
    {
        console.log(j)
    }
}
