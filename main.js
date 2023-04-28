const fieldValidator = {
    "Name" : {
        "error" : "Length should be between 4-10 characters.",
        "validator" : [{ "required" : true }]
    },
    "Email address" : {
        "error" : "should only support valid email address",
        "validator" : [{ "required" : false }]
    },
    "Contact number" : {
        "error" : "mobile number should be of 10 digits.",
        "validator" : [{ "required" : false }]
    },
    "Country" : {
        "error" : "Country is a mandatory field.",
        "validator" : [{ "required" : true }]
    },
    "State" : {
        "error" : "State is a mandatory field.",
        "validator" : [{ "required" : true }]
    },
    "Success" : "All fields are valid."
}

console.log(fieldValidator);

var myIframe = document.getElementById('mainIframe');

    var frame = myIframe.contentDocument;


    var submitButton = frame.getElementById('submitButton');

    console.log(submitButton);

    submitButton.addEventListener("click",function() {
    //console.log("Clicked submit");
   });