import { useEffect, useState } from "react";
import axios from "axios";
import { Stack, LinearProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const News = () => {
    const [listOfArticles, setListOfArticles] = useState([]);
    const [linearProgress, setLinearProgress] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
            params: {
                q: 'Gym',
                pageNumber: '1',
                pageSize: '10',
                autoCorrect: 'true',
                fromPublishedDate: 'null',
                toPublishedDate: 'null'
            },
            headers: {
                'X-RapidAPI-Key': `${process.env.REACT_APP_EXERCISES_DB_KEY}`,
                'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
            }
        };

        const fetchData = async () => {
            setError();
            setLinearProgress(true);
            try {
                const { data } = await axios.request(options);
                if (data && data.value && data.value.length > 0) {
                    setListOfArticles(data.value);
                    setLinearProgress(false);
                }

            } catch (error) {
                setLinearProgress(false)
                setError(`An unexpected error has occurred on our servers. We apologize for the inconvenience and are working to resolve the issue as soon as possible. Please try again later.`);
            }
        }

        fetchData();

    }, []);


    return (
        <>
        <Stack margin='0 auto' gap='2rem' height='90vh' width={{ xs: '90%', md: '60%' }} sx={{ overflowY: 'auto' }} borderRadius='10px' >
                {linearProgress && <LinearProgress sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '90%' }} />}
                {listOfArticles && listOfArticles.map((article) => {
                    return (
                        <Stack bgcolor='richBlack1' color='white' borderRadius='10px' alignItems='center' p='1rem'>
                            <img src={article.image.url} alt="" style={{ marginBottom: '1rem', height: '300px' }} />
                            <hr style={{ margin: 0, backgroundColor: 'white', width: '100%' }} />
                            <Typography fontWeight='600' fontSize='1.5rem' textAlign={"center"}> {article.title}</Typography>
                            <hr style={{ margin: 0, backgroundColor: 'white', width: '100%' }} />
                            <Typography fontWeight='400' fontSize='' textAlign={"justify"} mt='1rem'> {article.body}</Typography>
                        </Stack>
                    )
                })}
        </Stack>
            {error && <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: { sm: '1.5rem' }, color: 'black', border: '2px solid red', bgcolor: '#f5bfcc', p: '1rem', width: { xs: '90%', sm: '80%' }, textAlign: 'justify', borderRadius: '10px' }}>{error}</Box>}
        </>
    )
}