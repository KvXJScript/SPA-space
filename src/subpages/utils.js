export async function login({username, password}){
   return new Promise((resolve, reject)=>{
      setTimeout(() => {
         if(username === 'Milky' && password === 'Way'){
            resolve();
         }
         else{
            reject();
         } 
      }, 1000);
   })
}