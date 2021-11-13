import React, { FC,useState,useEffect,useRef,useContext } from 'react'
import { Grid,Paper, Avatar, Button} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from 'axios'
import Controls from './Inputs/Controls';
import {useNavigate} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import {CookieContext} from '../AppContext'

const LoginPage:FC = () => {
    const {cookies}=useContext(CookieContext) 
    const _isMounted = useRef<boolean>(true);
    const navigate = useNavigate();
    const[username,setUsername]=useState<string>("")
    const[password,setPassword]=useState<string>("")
    const[error,setError]=useState<string>("")
    const [prog,setProg]=useState<boolean>(false)
    const avatarStyle={backgroundColor:'#1bbd7e',margin:"0 auto"}
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
    const handleSubmit=async (e: React.FormEvent<HTMLFormElement>)=>{
        setProg(true)
        e.preventDefault();
        const response = await axios.post("https://fakestoreapi.com/auth/login", {
            username:username,
            password:password
          });
        //   console.log(response);
        if(response){
            setProg(false)
           if(response.data.status &&response.data.status==="Error"){
            setError(response.data.msg);
           }else{
            cookies.set("StoreId", response.data.token);
            navigate("/store")
           }
        }
        setUsername("")
        setPassword("")        
    }
    const handleChange=(e: React.FormEvent<HTMLFormElement>):void=>{
        if(e.currentTarget.name==="username"){
            setUsername(e.currentTarget.value)
        }else{
            setPassword(e.currentTarget.value)
        }

    }
    return (
        <form onSubmit={handleSubmit}>
        <Grid container>
            <Paper elevation={10} style={paperStyle}>
                <Grid  >
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2 style={{textAlign:"center"}}>Login Page</h2>
                </Grid>
                <br/>
                {error?  <p style={{color:"red"}} >{error}</p>:""}
                <br/>
                <Controls.TextInput name="username" value={username} onChange={handleChange} placeholder='Enter username' type="text" />
                <br/>
                <br/>
                <Controls.TextInput name="password"value={password} onChange={handleChange} placeholder='Enter password' type='password'/>
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
