Webcam.set({

    width:350,
    height:300,
    image_format:"png",
    png_quality:90
    
    })
    
    camera=document.getElementById("camera")
    Webcam.attach(camera)
    
    function snapshot(){
     Webcam.snap(
    function (data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_img" src="'+data_uri+'">'
    }
     )
    }
    
    console.log("ml5-version : " , ml5.version)
    classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/UyTZNIArk/model.json", modelLoaded)
    
    function modelLoaded(){
        console.log("Model Loaded")
    }
    
    function check(){
    img=document.getElementById("selfie_img")
    classifier.classify(img, gotResult)
    }
    
    function gotResult(error , results){
    
        if(error){
            console.error(error)
            
        }
        else{
            console.log(results)
            document.getElementById("result_obj").innerHTML =results[0].label
            document.getElementById("result_accuracy").innerHTML=(results[0].confidence*100).toFixed(0)+ "%"
        }
    }