import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import style from '../styles/waist.module.css'

function Upperarms() {
    const [gif, setGif] = React.useState([])
    const [name, setName] = React.useState([])
    const [smuscles, setSmuscles] = React.useState([])  //smuscles means secondaymuscles
    const [instr, setInstr] = React.useState([]) //instr means instructions

    const api = async () => {
        try {
            const data = await fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPart/upper arms?limit=10&offset=0', {
                headers: {
                    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
                    'x-rapidapi-key': '4347973f0fmsheb80c7564526789p1bc6c4jsne273ada830b8'
                }
            })
            const response = await data.json()
            setGif([response[0].gifUrl, response[4].gifUrl, response[2].gifUrl, response[3].gifUrl,
                response[6].gifUrl, response[7].gifUrl, response[8].gifUrl, response[9].gifUrl,
                response[1].gifUrl, response[5].gifUrl
            ])
            setName([response[0].name, response[4].name, response[2].name, response[3].name,
                response[6].name, response[7].name, response[8].name, response[9].name,
                response[1].name, response[5].name
            ])
            setSmuscles([response[0].secondaryMuscles, response[4].secondaryMuscles,
                response[2].secondaryMuscles, response[3].secondaryMuscles,response[6].secondaryMuscles,
                response[7].secondaryMuscles, response[8].secondaryMuscles, response[9].secondaryMuscles,
                response[1].secondaryMuscles, response[5].secondaryMuscles
            ])
            setInstr([response[0].instructions, response[4].instructions, response[2].instructions, response[3].instructions,
                response[6].instructions, response[7].instructions, response[8].instructions, response[9].instructions,
                response[1].instructions, response[5].instructions])
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
            {gif.length > 0 ?(
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

                <Card sx={{ maxWidth: 310 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        image={gif[2]}
                        sx={{ width: '300px', height: '250px' }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name[2]}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            The secondary Muscles that will be effect by 
                            doing this exercise are <h3 className={style.h}>{smuscles[2][0]}</h3>
                            <h3 className={style.h}>,</h3> <h3 className={style.h}>{smuscles[2][1]}</h3> 
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Instructions</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 310 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        image={gif[3]}
                        sx={{ width: '300px', height: '250px' }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name[3]}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            The secondary Muscles that will be effect by 
                            doing this exercise are <h3 className={style.h}>{smuscles[3][0]}</h3>
                            <h3 className={style.h}>,</h3> <h3 className={style.h}>{smuscles[3][1]}</h3> 
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Instructions</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 310 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        image={gif[4]}
                        sx={{ width: '300px', height: '250px' }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name[4]}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            The secondary Muscles that will be effect by 
                            doing this exercise are <h3 className={style.h}>{smuscles[4][0]}</h3>
                             <h3 className={style.h}>,</h3> <h3 className={style.h}>{smuscles[4][1]}</h3>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Instructions</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 310 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        image={gif[5]}
                        sx={{ width: '300px', height: '250px' }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name[5]}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            The secondary Muscles that will be effect by 
                            doing this exercise are <h3 className={style.h}>{smuscles[5][0]}</h3>
                            <h3 className={style.h}>,</h3> <h3 className={style.h}>{smuscles[5][1]}</h3>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Instructions</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 310 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        image={gif[6]}
                        sx={{ width: '300px', height: '250px' }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name[6]}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            The secondary Muscles that will be effect by 
                            doing this exercise are <h3 className={style.h}>{smuscles[6][0]}</h3> 
                            <h3 className={style.h}>,</h3> <h3 className={style.h}>{smuscles[6][1]}</h3> 
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Instructions</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 310 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        image={gif[7]}
                        sx={{ width: '300px', height: '250px' }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name[7]}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            The secondary Muscles that will be effect by 
                            doing this exercise are <h3 className={style.h}>{smuscles[7][0]}</h3> 
                            <h3 className={style.h}>,</h3> <h3 className={style.h}>{smuscles[7][1]}</h3> 
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Instructions</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 310 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        image={gif[8]}
                        sx={{ width: '300px', height: '250px' }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name[8]}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            The secondary Muscles that will be effect by 
                            doing this exercise are <h3 className={style.h}>{smuscles[8][0]}</h3> 
                            <h3 className={style.h}>,</h3> <h3 className={style.h}>{smuscles[8][1]}</h3> 
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Instructions</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 310 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        image={gif[9]}
                        sx={{ width: '300px', height: '250px' }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name[9]}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            The secondary Muscles that will be effect by 
                            doing this exercise are <h3 className={style.h}>{smuscles[9][0]}</h3> 
                            <h3 className={style.h}>,</h3> <h3 className={style.h}>{smuscles[9][1]}</h3> 
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
export default Upperarms;