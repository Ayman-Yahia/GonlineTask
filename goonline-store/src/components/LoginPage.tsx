import React, { FC,useState,useEffect,useRef,ChangeEvent } from 'react'
import { Grid,Paper, Avatar, Button} from '@material-ui/core'
import axios from 'axios'
import Controls from './Inputs/Controls';
import {useNavigate} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
const LoginPage:FC = () => {
    const _isMounted = useRef<boolean>(true);
    const navigate = useNavigate();
    const[username,setUsername]=useState<string>("")
    const[password,setPassword]=useState<string>("")
    const[error,setError]=useState<string>("")
    const [prog,setProg]=useState<boolean>(false)
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const btnstyle={margin:'8px 0'}
    useEffect(()=>{
        if (localStorage.getItem("StoreId")) {
            navigate("/store")
        }
        return () => { 
            _isMounted.current = false;
        }
    },[])
    const handleSubmit=async (e:ChangeEvent<HTMLInputElement>)=>{
        setProg(true)
        e.preventDefault();
        const response = await axios.post("https://fakestoreapi.com/auth/login", {
            username:username,
            password:password
          });
          console.log(response);
        if(response){
            setProg(false)
           if(response.data.status &&response.data.status=="Error"){
            setError(response.data.msg);
           }else{
            localStorage.setItem("StoreId", response.data.token);
            navigate("/store")
           }
        }
        setUsername("")
        setPassword("")        
    }
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        if(e.target.name=="username"){
            setUsername(e.target.value)
        }else{
            setPassword(e.target.value)
        }

    }
    return (
        <form onSubmit={(e)=>handleSubmit}>
        <Grid container>
            <Paper elevation={10} style={paperStyle}>
                <Grid justifyContent="center" >
                    <h2>Login Page</h2>
                </Grid>
                <br/>
                {error?  <p style={{color:"red"}} >{error}</p>:""}
                <br/>
                <Controls.TextInput name="username" onChange={handleChange} placeholder='Enter username' type="text" />
                <br/>
                <br/>
                <Controls.TextInput name="password" onChange={handleChange} placeholder='Enter password' type='password'/>
                <br/>
                <br/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Login</Button>
                <br/>
                {
                    prog &&(
                        <Box sx={{ display: 'flex',justifyContent:"center" }}>
                            <CircularProgress />
                        </Box>
                    )
                }
            </Paper>
        </Grid>
        </form>
    )
}

export default LoginPage
