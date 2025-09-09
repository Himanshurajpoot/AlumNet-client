import axios from "axios";
const ROOT_URL = 'http://localhost:4000/api/auth/';
const registerURL = ROOT_URL + 'register';



const registerUser = (state,setState,navigate)=>{
        const {name,password,email,role,bio,graduationYear,department} = state;

        fetch(registerURL,{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({ name,password,email,role,bio,graduationYear,department}),
        })
        .then((res) =>{
            if(!res.ok){
                 return res.json().then(({ errors }) => {
                    return Promise.reject(errors)
                })
            }

            return res.json();
        })
        .then(({user})=>{
            console.log(user)
            // navigate("/login",{replace: true})
        })
        .catch((error)=>{
            console.error("error");
        })

        return;
}

// const registerUser = (state,setState,navigate)=>{
//     const payload = {
//         ...state,
//         graduationYear: Number(state.graduationYear)
//     }
    
//     axios.post(registerURL,payload)
//     .then((res)=>{
//         console.log(res,'helousrd'); 
//     })
//     .catch((err)=>console.error(err)
//     )
// }
export {ROOT_URL,registerUser};