import {useState} from "react";


export function RegisteryForm(){

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const [birthday,setBirthday]=useState('');

    const [errors,setErrors]=useState({
        username:false,
        email:false,
        password:false,
        birthday:false,
    })

    const handleSubmit=(e:React.SubmitEvent)=>{
        e.preventDefault();

        const newErrors={
            username: !username,
            email: !email,
            password: (password.length<4 || password.length>16),
            birthday: false,
        }

        if(birthday){
            const birthdate=new Date(birthday);

            const today=new Date();
            const minAge=new Date(
                today.getFullYear()-18,today.getMonth(),today.getDate()
            )

            newErrors.birthday=birthdate>minAge
            if(birthdate>minAge) {
                alert("Must be 18+ to enter");
                return;
            }
        }
        else{
            newErrors.birthday=true;
        }

        setErrors(newErrors);

        if(!username||!password||!email||!birthday){
            alert('Fill all the fields');
            return;
        }

        if(password.length<4 || password.length>16){
            alert('Password must be between 4-16 char');
            return;
        }

        alert('Please check your mailbox for confirmation link');
        console.log(birthday)
        setUsername('');
        setPassword('');
        setEmail('');
        setBirthday('');
    }

    return(
        <>
            <h2 className="mb-4 text-xl font-bold">Register</h2>

            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <input
                    className={`rounded border p-2 ${errors.username ? "border-red-500" : "border-blue-950"} `}
                    placeholder="Username"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                />
                <input
                    className={`rounded border p-2 ${errors.email ? "border-red-500" : "border-blue-950"} `}
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                    className={`rounded border p-2 ${errors.password ? "border-red-500" : "border-blue-950"}`}
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <input
                    className={`rounded border p-2 ${errors.birthday ? "border-red-500" : "border-blue-950"}`}
                    placeholder="Date of Birth"
                    type="date"
                    value={birthday}
                    onChange={(e)=>setBirthday(e.target.value)}
                />

                <button type="submit" className="rounded bg-blue-500 p-2 text-white font-bold hover:bg-blue-600">
                    Join
                </button>
            </form>
        </>
    )
}