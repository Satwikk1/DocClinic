import React from 'react'
import socialMediaAuth from '../service/auth';
import {facebookProvider, googleProvider, githubProvider} from '../config/authMethods';
// import {Button} from 'react-bootstrap';
import Button from  '@material-ui/core/Button'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import './common.css'
import {AiOutlineGoogle} from 'react-icons/ai'
import 'bootstrap/dist/css/bootstrap.min.css';
import notebookImg from './media/notebookimg.png'
const Authentication = (props) => {

    const handleOnClick = async (provider) => {
        const res = await socialMediaAuth(provider, props);
    };

    return (
        <div style={{backgroundColor: "#E1E8EB"}}>
            <div className={"nav-heading"}>
                <h3>DocClinc</h3>
                <h4 style={{marginLeft: "680px"}} className={" mt-1"}>Contact</h4>
                <h4 className={"ml-5 mt-1"}>Info</h4>
                <h4 className={"ml-5 mt-1"}>Book Appointment</h4>
            </div>
            <div className={"auth-root-div"}>
                <div className={"table"}></div>
                <div className={"notebook-img"}>
                    <div>
                        <img className={"notebook-img-hover"} src={notebookImg} alt={'notebook'} />
                    </div>
                    <div>
                        <Button 
                            color="primary" 
                            className={"my-2 mt-5 d-flex classes.button btn-4"} 
                            onClick={()=>handleOnClick(facebookProvider)} 
                            variant="contained"
                            startIcon={<FacebookIcon />}
                            >
                                LogIn with Facebook
                        </Button>{' '}
                        <Button className={"my-2 mt-3 d-flex classes.button btn-4"} 
                            color=""
                            onClick={()=>handleOnClick(githubProvider)} 
                            variant="contained"
                            // fullWidth={true}
                            startIcon={<GitHubIcon />}
                            >
                                LogIn with GitHub
                        </Button>{' '}
                        <Button className={"my-2 mt-3 d-flex contained btn-4"} 
                            style={{backgroundColor: 'rgb(220, 72, 53)', color: "white"}}
                            onClick={()=>handleOnClick(googleProvider)} 
                            variant="outline-primary"
                            // fullWidth={true} 
                            startIcon={<AiOutlineGoogle />}
                            >
                                LogIn with Google
                        </Button>{' '}
                    </div>
                    <div style={{position: "absolute", left: "54%", top: "48%", transform: "rotate(14deg)"}}>
                        <img className={"stethoscope"} alt={"stethoscope"} src={"https://pngimg.com/uploads/stethoscope/stethoscope_PNG6.png"}/>
                    </div>
                </div>

            </div>
        </div>
        
    )
}

export default Authentication
