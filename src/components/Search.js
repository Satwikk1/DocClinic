import React from 'react'
import {useState} from 'react'
import {db} from '../config/firebaseConfig'
import {Avatar} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import {Card, Button} from 'react-bootstrap'
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';

const Search = (props) => {
    
    const [result, setResult] = useState([])
    const [query, setQuery] = useState()


    const getRandomDocPic=()=>{
        let list=[
            // 'https://i.pinimg.com/originals/d3/f9/13/d3f913b8dd27fac04b26c2c9a903610d.png',
            'https://img.flaticon.com/icons/png/512/387/387561.png',
            'https://www.combankmed.com/wp-content/uploads/2015/06/Male-Doctor-Avatar.png',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiPe3KLaFKMU7HNtw4HAaADaH2zIBBy_3CHZZYiEHhJc74G0GNHQB_RfyD2khImQi2eKg&usqp=CAU',
            'https://previews.123rf.com/images/inegvin/inegvin1711/inegvin171100015/89549898-doctor-web-icon-therapist-medical-avatar-in-flat-style-illustration.jpg',
            'https://image.shutterstock.com/image-illustration/vector-medical-icon-doctor-woman-260nw-1657619497.jpg',
            'https://img.pngio.com/doctor-clipart-primary-care-physician-doctor-primary-care-primary-care-physician-png-640_640.png',
            'https://www.clipartmax.com/png/middle/231-2310086_primary-care-physician-illustrations.png',
            'https://www.pinclipart.com/picdir/big/104-1043692_your-doctor-prescribes-physician-clipart.png',
            'https://image.shutterstock.com/image-illustration/vector-medical-icon-doctor-avatar-260nw-1699680484.jpg',
            'https://www.netclipart.com/pp/m/393-3933329_male-doctor-clipart.png'

        ]
        return list[Math.floor(Math.random()*list.length)]
    }

    const logout = ()=>{
        localStorage.clear();
        props.setLoginState(false);
    }

    const handleOnChange = (e)=>{
        let val = e.target.value;
        db.collection('Doctor').get().then(snapshot=>{
            let data = snapshot.docs;
            let filtereddata=[];
            data.map((snap) => {
                if(snap.data().name.includes(val) || snap.data().field.includes(val) || snap.data().spec.includes(val))
                filtereddata.push(snap.data())
            })
            let exactMatch = []
            filtereddata.map((data)=>{
                if(data.name.localeCompare(val) || data.field.localeCompare(val) || data.spec.localeCompare(val)){
                    exactMatch.push(data);
                }
            })
            if(exactMatch.length){
                setResult(exactMatch)
            }
            else{
                setResult(filtereddata)
            }
            // console.log(filtereddata)
        })
        .catch(error=>console.log(error));
    }

    return (
        <div className={"search-div"}>
            <div className={'container d-flex'}>
                <SearchIcon className={"searchIcon"}/>
                <input type={'text'} className={"searchfield mb-5"} onChange={handleOnChange}></input>
                {/* <h4 style={{marginLeft: 'auto', marginRight: 'auto', color: 'white', paddingTop: '6px'}}>DocClinic</h4> */}
                <div className={"d-flex disp-name"}>
                    <h3 className={'displayName'}>{props.user.displayName}</h3>
                    <Avatar alt="Remy Sharp" src={props.user.photoURL} />
                    <ExitToAppTwoToneIcon onClick={logout} className={"logout-ico"}/>
                </div>
            </div>
            <div className={"container card-div row row-cols-4 mt-2"} style={{marginLeft: 'auto', marginRight: 'auto'}}>
                {result.map(res=>(
                    <Card className={"card-width mt-4 col"} style={{ maxWidth: '16rem', marginLeft: 'auto', marginRight: 'auto' }}>
                        <Card.Img className={""} variant="top image" src={getRandomDocPic()}/>
                        <Card.Body>
                        <Card.Title>{res.name}</Card.Title>
                        <Card.Text>
                            <b>Field:</b> {res.field}
                            <br />
                            <b>Speciality:</b> {res.spec}
                        </Card.Text>
                        <Button variant="primary">Contact</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Search
