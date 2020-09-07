const _Up = ()=>({
    type:"ADD"
})

const _Down = ()=>({
    type:"SUBSTRACK"
})

export function incrementAsync(){
    return async (dispatch)=>{
       const api = await fetch('http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-03&sortBy=publishedAt&apiKey=fe5db6b9e2ed429cbfa3ccce8576b0d6');

       setTimeout(()=>{
           dispatch(_Up())
       },5000)
    }
}

export function decrementAsync(){
    return async (dispatch)=>{
       const api = await fetch('http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-03&sortBy=publishedAt&apiKey=fe5db6b9e2ed429cbfa3ccce8576b0d6');

       setTimeout(()=>{
           dispatch(_Down())
       },5000)
    }
}