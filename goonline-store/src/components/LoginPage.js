import React,{useState,useEffect,useRef} from 'react'
import { Grid,Paper, Avatar, Button} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Controls from './Inputs/Controls';
import axios from 'axios'
import Cookies from "js-cookie";
import {useNavigate} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

const LoginPage = () => {
    const _isMounted = useRef(true);
    const navigate = useNavigate();
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const[error,setError]=useState("")
    const [prog,setProg]=useState(false)
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    useEffect(()=>{
        if (Cookies.get("StoreId")) {
            navigate("/store")
        }
        return () => { // ComponentWillUnmount in Class Component
            _isMounted.current = false;
        }
    },[])
    const handleSubmit=async (e)=>{
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
            Cookies.set("StoreId", response.data.token);
            navigate("/store")
           }
        }
        setUsername("")
        setPassword("")        
    }
    return (
        <form onSubmit={handleSubmit}>
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Login Page</h2>
                </Grid>
                <br/>
                {error?  <p style={{color:"red"}} >{error}</p>:""}
                <br/>
                <Controls.TextInput value={username} label='Username'onChange={(e)=>setUsername(e.target.value)} placeholder='Enter username' />
                <br/>
                <br/>
                <Controls.TextInput value={password} label='Password' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password' type='password'/>
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
