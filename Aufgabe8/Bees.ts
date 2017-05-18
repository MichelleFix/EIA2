namespace L8_Inheritance {
    export class Bees {
        x: number;
        y: number;
        color: string;
        wingSize: number;
        
         constructor(_x: number, _y: number) {
            this.setRandomStyle();
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
        }

        update(): void{
            this.draw();
            this.fly();   
        
        }
        
        draw(): void{
            }
        
        fly(): void{
            this.x += Math.floor(Math.random() * 10) - 5;
            this.y += Math.random() * 4 - 2;    
        
        }
                
        setRandomStyle():void{
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.wingSize = (Math.random() * (40 - 10) + 10);

        }

    }
}