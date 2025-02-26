const express = require('express');
const app= express();
app.use(express.json())

const fs = require('fs');


let movies= JSON.parse(fs.readFileSync('./data/movies.json'));

//READ.........
// Handling GET requests.....................................................................................................


app.get('/movies',(req,res)=>{
   
    res.status(200).json({   //this is call json -json formatting
        status:"success",
        count:movies.length,
        message:"Data retrieved successfully",
        // data:{
        //     movies:movies
        // }
        movies  
    })
     
})

//Hading GET with specific ID....................................................................................................

app.get('/movies/:id',(req,res)=>{ //: specifies that it is a route parameter

    // console.log(req.params); 
    // res.send("hellp from sserver")

    const id = req.params.id*1;
    let movie= movies.find(idx=>idx.id===id);
    if(!movie){
       return res.status(404).json({
            status:"failed",
            message:"invalid id",

        })

    }
     else if(movie==-1){
        res.status(404).json({
            status:"failed",
            message:"invalid id",

        })
    }
    else{
        res.status(200).json({
            status:"success",
            message:"movie found",
            data:{
                movie:movie
            }
        })
    }

})  

// CREATE/.....
// Handling POST requests..............................................................................


app.post("/movies",(req,res)=>{
    const{name,releaseDate,duration}=req.body;
    
    if( !name || !releaseDate || !duration){
        res.send(400).json({status:"Failed",message:"All fields are required"});
    }
    else{
        const newId =movies.length>0? movies[movies.length-1].id+1:1; 
       
        const newMovie ={
            id:newId,name,releaseDate,duration
        }
        movies.push(newMovie);

        fs.writeFile('./data/movies.json',JSON.stringify(movies),(err)=>{
            console.log("done");
        })
        res.status(201).json({status:"success",message:"New Product added successfully",newMovie});
        
    }
 
    
})


//UPDATE....
// Handling PATCH requests................................................................................................

app.patch('/movies/:id',(req,res)=>{
    const id=req.params.id*1;
   const movieToUpdate= movies.find(idx=> idx.id===id);
   let index= movies.indexOf(movieToUpdate);  //id-4 ,indx=3

   Object.assign(movieToUpdate,req.body);
   movies[index]= movieToUpdate;

   fs.writeFile('./data/movies.json',JSON.stringify(movies),(err)=>{

    res.status(200).json({status:"success",message:"New Product added successfully",
        data:{
           movie: movieToUpdate}
        });
        

   })
})


//DELETE.........

//Handling DELETE Request.........................................................................................................

app.delete('/movies/:id',(req,res)=>{
    const id= req.params.id*1;///convert string to numeric type

    const movieToDelete =movies.find(idx=>idx.id===id);

    const index  = movies.indexOf(movieToDelete);

    movies.splice(index,1); // original array me delte hoga

    fs.writeFile('./data/movies.json',JSON.stringify(movies),(err)=>{
        res.status(204).json({status:"success",message:"deleted",
            data:{
               movie: null
            }
            });  // 204 means no content

    })




})



//Creating server
const port = 3000;
app.listen(port,()=>{
    console.log(`Server satarted on port ${port}`);
})