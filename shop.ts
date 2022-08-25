interface shops {
    name:string;
    count: number;
    id:number;
    
}

class phone implements shops {
    name: string;
    count: number;
    id: number;
    constructor(name: string, count: number, id: number) {
        this.name = name; 
        this.count = count;
        this.id = id;
    }
    
    getAllInfo(): string {
        return "phone name: " + this.name + " phone Count: " +this.count;
    }
    
}
class laptop implements shops{
    name: string;
    count: number;
    id: number;
    constructor(name: string, count: number, id: number) {
        this.name = name; 
        this.count = count;
        this.id = id;
    }
    
    getAllInfo(): string {
        return "laptop name: " + this.name + " laptop Count: " +this.count;
    }
    thresh(num:number){    //Threshold function
        if(num>100){
            let limits= "Enough Stack";
            return limits;
        }
    }
}
// Adding Products
 var app = new phone('realme6', 100, 2);
 console.log(app.getAllInfo());

 var Man = new phone('realme7', 100, 1);
 console.log(Man.getAllInfo());
 
 var car = new laptop('lenovo', 50, 3);
 console.log(car.getAllInfo());

 var pot = new laptop('hp', 500, 4);
 console.log(pot.getAllInfo());
 
 //Threshold
 let results=pot.thresh(pot.count)
console.log("--Threshold:--");
 console.log(results);
