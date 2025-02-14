import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import style from '../styles/waist.module.css'

function Neck() {
    const [gif, setGif] = React.useState([])
    const [name, setName] = React.useState([])
    const [smuscles, setSmuscles] = React.useState([])  //smuscles means secondaymuscles
    const [instr, setInstr] = React.useState([]) //instr means instructions

    const api = async () => {
        try {
            const data = await fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPart/neck?limit=10&offset=0', {
                headers: {
                    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
                    'x-rapidapi-key': '4347973f0fmsheb80c7564526789p1bc6c4jsne273ada830b8'
                }
            })
            const response = await data.json()
            setGif([response[0].gifUrl, response[1].gifUrl ])
            setName([response[0].name, response[1].name ])
            setSmuscles([response[0].secondaryMuscles, response[1].secondaryMuscles ])
            setInstr([response[0].instructions, response[1].instructions ])
        }
        catch { }
    }
 
    React.useEffect(() => {
        api();
    }, [])

    const inst = ()=>{
        
    }

    return (<>
        <h1 style={{textAlign:'center', paddingTop:'20px'}}></h1>
        <div id={style.container}>
            {gif.length > 0 ? (
            <>
                <Card sx={{ maxWidth: 310 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        image={gif[0]}
                        sx={{ width: '300px', height: '250px'}}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name[0]}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            The secondary Muscles that will be effect by 
                            doing this exercise are <h3 className={style.h}>{smuscles[0][0]}</h3>
                             <h3 className={style.h}>,</h3> <h3 className={style.h}>{smuscles[0][1]}</h3>  
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={inst} >Instructions</Button>
                        </CardActions>
                    </Card>

                <Card sx={{ maxWidth: 310 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        image={gif[1]}
                        sx={{ width: '300px', height: '250px' }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name[1]}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            The secondary Muscles that will be effect by 
                            doing this exercise are <h3 className={style.h}>{smuscles[1][0]}</h3>
                            <h3 className={style.h}>,</h3> <h3 className={style.h}>{smuscles[1][1]}</h3> 
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Instructions</Button>
                    </CardActions>
                </Card>
            </>
        ):(<p>Loading...</p>)}
        </div>
        </>
    );
}
export default Neck;