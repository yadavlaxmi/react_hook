import { Button } from "@mui/material"
const Forms=()=>{
    return(
    <>
        <form action="">
            <div>
                <label htmlFor="Name">Name</label>
                <input type="text" name="Name" id="Name"/>
            </div><br></br>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" autoComplete="off"/>
            </div><br></br>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password"/>
            </div><br></br>
            <Button type ="submit" variant="contained"> logIn </Button>


        </form>
    </>
    )
}
export default Forms