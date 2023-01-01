import React from "react";
import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const api = 'https://api.spaceflightnewsapi.net/v3/articles'

export function Articles(){
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const getFetchArticles = async () => {
        setLoading(true)
        setError('')
        try {
            const res = await fetch(api)
            if(res.ok){
                const data = await res.json()
                setArticles(data)
            }
        } catch (error) {
            setError(error.message)
        } finally{
            setLoading(false)
        }
        
    }

    useEffect(() => {
        // fetch(api)
        //     .then((responce) => responce.json())
        //     .then((data) => setArticles(data))
        // getFetchArticles()
    }, [])
    return(
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '5vh' }}>
                <Button variant="contained" color="success" onClick={getFetchArticles}>
                    GET API
                </Button>
            </Box>
            {loading && 
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '15vh' }}>
                 <CircularProgress />
            </Box>}
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '45px', marginTop: '5vh' }}>
                {!loading && articles.map(article => (
                    <Card sx={{ maxWidth: 370 }} key={article.id}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image={article.imageUrl}
                            alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {article.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {article.summary}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
            {error && <p style={{color: "red", textAlign: 'center', marginTop: "20vh"}}>{error}</p>}
        </>
    )
}