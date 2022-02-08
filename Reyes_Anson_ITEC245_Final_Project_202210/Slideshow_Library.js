//Anson Reyes
//Everything in this library is wrapped in a safe IIFE
;(function (global)
{
    //This function allows users to change to default values
    function extend(a,b)
    {
        for(let x in b)
        {
            a[x] = b[x]
        }
    return a;
    }
    /*This function is the main function that is run for the slideshow to work 
    and it accepts The user's name, three booleans and runs the extend,_init and printDefaults functions.
    */ 
    function Slideshow(username,isbig,isswitched,isvis,options)
    {
        this.username = username;
        this.isbig = isbig;
        this.isswitched = isswitched;
        this.isvis = isvis;
        this.options = extend(this.defaults,options);
        this._init();
        this.printDefaults();
    }
    //All of the slideshows functionality is added to Slideshow's prototype
    Slideshow.prototype = 
    {
        //These are default values the slideshow starts with when _init is called in the constructor function
        defaults:
        {
            startimage:0,
            images:["url(Images/11-22-63.jpg)","url(Images/A_Dance_With_Dragons.jpg)",
                   "url(Images/Artemis.jpg)","url(Images/Calibans_War.jpg)",
                    "url(Images/Do_Andriods.jpg)","url(Images/Dune_Messiah.jpg)",
                    "url(Images/Fall_Of_Giants.jpg)","url(Images/The_Collapsing_Empire.jpg)",
                    "url(Images/The_Wasteland.jpg)","url(Images/The_Way_Of_Kings.jpg)"],
            autoplay:true,
            transspeed:1000,
        },
        /*This is the _init function that starts the slideshow but will stop it if the autoplay value in defaults is changed to true.
        It uses a setInterval() function to constantly change the picture.*/
            _init: function()
            {
                let picturebox = document.getElementById("slideshow-box");
                picturebox.style.backgroundImage = this.defaults.images[this.defaults.startimage];
                setInterval(()=>{
                    if(this.defaults.startimage == this.defaults.images.length && this.defaults.autoplay == true)
                    {
                        this.defaults.startimage = 0;
                        picturebox.style.backgroundImage = this.defaults.images[this.defaults.startimage];
                    }
                    else if(this.defaults.autoplay == true)
                    {
                        this.defaults.startimage += 1;
                        picturebox.style.backgroundImage = this.defaults.images[this.defaults.startimage];
                    }
                },this.defaults.transspeed);
            },
        //Prints the default values in the console of the browser
            printDefaults: function()
            {
                console.log("Username: " + this.username);
                console.log("List of defaults:");
                for(let x in this.defaults)
                {
                    console.log(x,this.defaults[x]);
                }
            },
        //Triggered by an eventlistener and allows you to start or stop the slideshow.
            playPause: function()
            {
                let def = Slide.defaults;
                let off = {autoplay:false};
                let on = {autoplay:true};
                if(Slide.defaults.autoplay == true){
                    for(x in off)
                    {
                        def[x] = off[x];
                    }
                }
                else if(Slide.defaults.autoplay == false)
                {
                    for(x in on)
                    {
                        def[x] = on[x];
                    }  
                }
            },
        //Triggered by an eventlistener and allows you to remove images from the slideshow as long as it's paused
            removeImage: function()
            {
                if(Slide.defaults.autoplay == false)
                {
                    let image = Slide.defaults.images;
                    image.splice(Slide.defaults.startimage,1);
                }
                else
                {
                    alert("Please pause the slideshow before you remove the image");
                }
            },
        //Triggered by eventlistener and allows you to change the dimensions of the slideshow
            setLayout: function()
            {
                if(Slide.isbig == false)
                {
                document.querySelector("#slideshow-box").style.width = "400px";
                document.querySelector("#box").style.width = "400px";
                document.querySelector("#slideshow-box").style.height = "200px";
                Slide.isbig = true;
                }
                else if(Slide.isbig == true)
                {
                document.querySelector("#slideshow-box").style.width = "600px";
                document.querySelector("#box").style.width = "600px";
                document.querySelector("#slideshow-box").style.height = "400px";
                Slide.isbig = false;
                }
            },
        //Goes to the previous image in the slideshow
            decrement: function(length)
            {
                let picturebox = document.getElementById("slideshow-box");
                if(this.defaults.startimage == 0)
                {
                    this.defaults.startimage = length - 1;
                    picturebox.style.backgroundImage = this.defaults.images[this.defaults.startimage];
                }
                else{
                this.defaults.startimage = this.defaults.startimage - 1;
                picturebox.style.backgroundImage = this.defaults.images[this.defaults.startimage];
                }
            },
        //Triggered by eventlistener and runs the decrement function
            previous: function()
            {
                Slide.decrement(Slide.defaults.images.length);
            },
        //Goes to the next image in the slideshow
            increment: function(length)
            {
                let picturebox = document.getElementById("slideshow-box");
                if(this.defaults.startimage >= length - 1)
                {
                    this.defaults.startimage = 0;
                    picturebox.style.backgroundImage = this.defaults.images[this.defaults.startimage];
                }
                else{
                this.defaults.startimage = this.defaults.startimage + 1;
                picturebox.style.backgroundImage = this.defaults.images[this.defaults.startimage];
                } 
            },
        //Triggered by eventlistener and runs the increment function
            next: function()
            {
                Slide.increment(Slide.defaults.images.length);
            },
        //Switches the colors of the elements to a night mode
            colorSwitch: function()
            {
                if(Slide.isswitched == false)
                {
                document.body.style.backgroundColor = "black";
                document.querySelector("#button-container").style.backgroundColor = "white";
                document.querySelector("#instructions").style.color = "white";
                document.querySelector("#box").style.boxShadow = "10px 5px 5px white";
                Slide.isswitched = true;
                }
                else if(Slide.isswitched == true)
                {
                document.body.style.backgroundColor = "white";
                document.querySelector("#button-container").style.backgroundColor = "black";
                document.querySelector("#instructions").style.color = "black";
                document.querySelector("#box").style.boxShadow = "10px 5px 5px black";
                Slide.isswitched = false;
                }
            },
        //Hides and shows basic instructions for the user
            instructions: function()
            {
                if(Slide.isvis == false)
                {
                document.querySelector("#instructions").style.display = "none";
                Slide.isvis = true;
                }
                else if(Slide.isvis == true)
                {
                document.querySelector("#instructions").style.display = "block";
                Slide.isvis = false;
                }
            }
    }
    //Creates an alias for the project name
    if (typeof global.Slideshow === "undefined"){
        global.Slideshow = global.StartSlide = Slideshow;
    }
    else {
        throw("ProjectName cannot be added to global namespace");
    }
}(window));