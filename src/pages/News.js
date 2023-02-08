import { useEffect, useState } from "react";
import axios from "axios";
import { Stack, LinearProgress, Typography, Container } from "@mui/material";

export const News = () => {
    const [listOfArticles, setListOfArticles] = useState([]);
    const [linearProgress, setLinearProgress] = useState(false);

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
                // 'X-RapidAPI-Key': `${process.env.REACT_APP_EXERCISES_DB_KEY}`,
                'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
            }
        };

        const fetchData = async () => {
            setLinearProgress(true)
            try {
                const { data } = await axios.request(options); /*data =  is array with exercises objects */
                if (data && data.value && data.value.length > 0) {
                    setListOfArticles(data.value);
                    setLinearProgress(false)
                }
            } catch (error) {
                setLinearProgress(false)
                console.log('blad')
                //and show errror
            }
        }

        fetchData()

    }, []);


    return (
        <Container>
            <Stack gap='2rem'>
                {linearProgress && <LinearProgress />}
                {listOfArticles && listOfArticles.map((article) => {
                    return (
                        <Stack bgcolor='black' color='white' borderRadius='10px' overflow='hidden' alignItems='center' p='1rem'>
                            <img src={article.image.url} alt="" style={{ marginBottom: '1rem', height: '300px' }} />
                            <hr style={{ margin: 0, backgroundColor: 'white', width: '100%' }} />
                            <Typography fontWeight='600' fontSize='1.5rem' textAlign={"center"}> {article.title}</Typography>
                            <hr style={{ margin: 0, backgroundColor: 'white', width: '100%' }} />
                            <Typography fontWeight='400' fontSize='' textAlign={"justify"} mt='1rem'> {article.body}</Typography>
                        </Stack>)
                })}
            </Stack>

        </Container >


    )
}