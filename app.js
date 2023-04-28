document.addEventListener('DOMContentLoaded',() => {

    const selectDropCountry = document.querySelector('#country');
    const selectDropStates = document.querySelector('#state');
    const submit = document.querySelector('#submitButton');
    const dynamic = document.querySelector('#dynamic');
    console.log(submit);

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

    //var map = new Map();
    //const countryStates = {};

    fetch('https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json').then(res => {
        return res.json();
    }).then(data => {

        const countries = data.map(country => ({
        name: country.name,
        states: country.states || []
        }));

        console.log(countries);

        countries.forEach(country => {
            const option = document.createElement('option');
            option.text = country.name;
            selectDropCountry.add(option);
        });

        selectDropCountry.addEventListener('change',() => {
            const selectedCountry = selectDropCountry.value;
            const countryObj = countries.find(country => country.name === selectedCountry);

            if (countryObj) {
            const selectedStates = countryObj.states;


             selectDropStates.innerHTML = '';

             selectedStates.forEach(state => {
             const option = document.createElement('option');
             option.text = state.name; 
             selectDropStates.add(option);
        }
        );

    }
});

    submit.addEventListener('click', () => {
        try {
        const dynamic = document.querySelector('#dynamic');
        const name = document.querySelector('#name');

        if(name.value==null){
            const p = document.createElement("p");
            p.textContent = `Result:{"Name":{"error':"${fieldValidator["Name"].error}"}}`;
            dynamic.innerHTML = '';
            dynamic.appendChild(p);
            dynamic.innerHTML = localStorage.getItem('dynamicContent');
            return;
        }
        //const dob = document.querySelector('#date');
        //const tel = document.querySelector('#tel');
        const country = document.querySelector('#country').value;
        const state = document.querySelector('#state').value;
        //const email = document.querySelector('#email');
        


        for(const [key, value] of Object.entries(fieldValidator)){
            if(key=="Name"){
                const nameRegex = /^[a-zA-Z]{4,10}$/;

                if(name.value.length >= 4 && name.value.length <= 10){
                    const p = document.createElement("p");
                    p.textContent = `Result:{"${key}":{"error':"${value.error}"}}`;
                    console.log(p.textContent);
                    dynamic.innerHTML = '';
                    dynamic.appendChild(p);
                    break;
                }
            }

            else if(key=="Email address"){
                const email = document.querySelector('#email');
                const emailregex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                if(email.value==null)
                break;

                if(!email.value.includes("@") || !email.value.includes(".")){
                    const p = document.createElement("p");
                    p.textContent = `Result:{"${key}":{"error':"${value.error}"}}`;
                    console.log(p.textContent);
                    dynamic.innerHTML = '';
                    dynamic.appendChild(p);
                    break;
                }
            }
            
            else if(key=="Country"){
                if(country==null || country=='--Select A Country--'){
                    const p = document.createElement("p");
                    p.textContent = `Result:{"${key}":{"error':"${value.error}"}}`;
                    console.log(p.textContent);
                    dynamic.innerHTML = '';
                    dynamic.appendChild(p);
                    break;
                }
            }
            else if(key=="State"){
                if(state==null || state=='--Select A State--'){
                    const p = document.createElement("p");
                    p.textContent = `Result:{"${key}":{"error':"${value.error}"}}`;
                    console.log(p.textContent);
                    dynamic.innerHTML = '';
                    dynamic.appendChild(p);
                    break;
                }
            }
            else{
                const p = document.createElement("p");
                p.textContent = `Result:{"Success":"All fields are valid."}`;
                console.log(p.textContent);
                dynamic.innerHTML = '';
                dynamic.appendChild(p);
                break;
            }
        }
        } catch (error) {
            console.log(error);
        }

    });


        //console.log(countryStates);
    }).catch(err => {
        console.log(err);
    })

});