//
function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
      return input.toLowerCase();
    }
  

    return input.toUpperCase();
  }

    

  
 
  // 
  function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
   const result = items.filter(item => item.rating >= 4 )
   return result;
   
  }

//
 function concatenateArrays<T>(...arrays: T[][]): T[]{

   const result: T[] =[];

   arrays.forEach(array => result.push(...array))

   return result;

 }







  //
class Vehicle {

    constructor (private make: string , private year:number){


    }

    getInfo (){
        console.log(`Make: ${this.make}, Year:${this.year} `)
    }


}


class Car  extends Vehicle{


    constructor ( make: string, year:number, private model : string){
       super(make, year) ;
    }
    

    getModel(){
        console.log(`Model: ${this.model}` )
    }


}



//

function processValue(value: string | number): number{
    if(typeof value === "string"){
        return value.length;
    }

    return value *2;
}


//

interface Product {
    name: string;
    price: number;
  }
  
function getMostExpensiveProduct(products: Product[]): Product | null{
    if(products.length ===0){
        return null;
    }

    let mostExpensive = products[0];
products.forEach(product => {

    if(product.price > mostExpensive.price){
        mostExpensive=product;
    }


   
   
    
   });

   return mostExpensive;
}




  //


  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
   if(day === Day.Saturday || day === Day.Sunday){
    return "Weekend"
   }

   return "WeekDay"
  }


  //
  async function squareAsync(n: number): Promise<number>{
  


    return new Promise ((resolve , reject) => {
       if(n < 0){
        reject (`Error:Negative number not allowed`)
       } else {
        setTimeout(() => {
            resolve (n*n)
        } , 1000)

       }
        
    })




  }

 


  




