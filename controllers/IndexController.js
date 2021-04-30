

class IndexController{
    async indexView(req,res){
       
        res.render('index');
    }
   
}

module.exports=new IndexController()