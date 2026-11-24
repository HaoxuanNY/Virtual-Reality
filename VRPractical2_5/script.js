/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/

class MazeWall{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;

    this.obj = document.createElement("a-box");
    this.obj.setAttribute("width",3);
    this.obj.setAttribute("height",3);
    this.obj.setAttribute("depth",3);
    this.obj.setAttribute("color","#607D8B");
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});

    scene.append(this.obj);
  }
}

class Crystal{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;

    this.obj = document.createElement("a-octahedron");
    this.obj.setAttribute("radius",0.5);
    this.obj.setAttribute("color","#00BCD4");
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});

    scene.append(this.obj);
  }
}

class Exit{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;

    this.obj = document.createElement("a-cylinder");
    this.obj.setAttribute("radius",0.8);
    this.obj.setAttribute("height",0.1);
    this.obj.setAttribute("color","gold");
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});

    scene.append(this.obj);
  }
}

let maze = [
  "WWWWWWWWWW-WWWWWWWWWWW",
  "W----W----C----W-----W",
  "W-WW-W-WWW-WWW-W-WWW-W",
  "W-W--W---W---W---W---W",
  "W-W-WWWW-WWW-WWWWW-W-W",
  "W-W----W---W-----W-W-W",
  "W-WWWW-WWW-WWWWW-W-W-W",
  "W----W---C-----W---W-W",
  "WWWW-WWWWWWWWW-WWW-W-W",
  "W----W---------W---W-W",
  "W-WWWW-WWWWWWWWW-WWW-W",
  "W-------------------EW"
];


/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
   W = Wall
   C = Crystal
   E = Exit
   - = Empty Path

*/

let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    /* Challenge 3
      Choose a technique to traverse the each character in the string.
    */ 
    for(let c = 0; c < maze[r].length; c++){

      let x = (c - 10) * 3;
      let z = -r * 3;
    
    /* Challenge 4
       Make an appropriate decision based on the characters you chose to enter 
       in the maze.  Create an instance of the corresponding object. */
    if(maze[r][c] == "W"){
        new MazeWall(x,1.5,z);
      }
      else if(maze[r][c] == "C"){
        new Crystal(x,1,z);
      }
      else if(maze[r][c] == "E"){
        new Exit(x,0.05,z);
      }
    }
  }
})
