import {useState, useEffect} from 'react'       //we imported useState hook & useEffect hool from reeact
import axios from 'axios'           //we imported axios from axios library, it's used to communicate with the backend i.e (is for making HTTP requests)


const useFetch = (endpoint, query) => {     //the useFetch hook is a custom-made hook used for fetching data externally and internally
    //the useFetch component contains two parameters; the endpoint param is all about d what we'll be using the api url for; and d query param
    const [data, setData] = useState([]);       //used the useState hook to manage data in the useFetch component ; defines three state variables (data, isLoading, and error) using the useState hook
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {       //an object variable that contains the Api details 
        //The options object contains configuration settings for the Axios HTTP request. It specifies the request method (GET), the API URL (constructed based on the endpoint parameter), headers (containing the RapidAPI key and host), and query parameters (based on the query parameter
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,  //the api url is gotten from rapidApi
        headers: {
            'X-RapidAPI-Key': '58d9564b6cmsh031062886ec2371p1fd16ejsn44f306ce9854',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }, //this is the what the header will contain
        params: {
            ...query
        }       
    };

    const fetchData = async () => {     //then we move to the fetchData component that is an async function
        //The fetchData function is an asynchronous function that performs the data fetching process. It sets isLoading to true to indicate that data is being fetched. It then makes an HTTP request using Axios with the specified options. If the request is successful, it sets the data state with the fetched data and sets isLoading to false. If there is an error, it catches the error, sets it to the error state, and displays an alert. Finally, it sets isLoading to false in the finally block 
        setIsLoading(true);             // we 1st of all set isLoading state to true, hence loading d widget

        try {           //then we BASICALLY try, catch, & finally
            const response = await axios.request //we create a response variable that awaits the request from axios(backend)
            (options);                      //then we load the options component; i.e our Api url
            setData(response.data.data);        //then we loat the data response
            setIsLoading(false)                 //and set isLoading back to false since our page is showing now
        }catch(error){                      //in case there's an error, 
            setError(error);                //the standard error message will be outputted
            alert('There is an error');        //including our own custom-made
        }finally{
            setIsLoading(false);            //FINALLY, we still set loading to be false
        }
    }

    useEffect(() => {       //to make sure our component is pure and not mutated, we use the useEfffect Hook
        //The useEffect hook is used to run the fetchData function when the component is mounted. The empty dependency array ([]) ensures that the effect runs only once after the initial render
        fetchData();        //and we render the fetchData component we created.
    }, []);                 //to make sure it renders only once, we put an empty array there

    const refetch = () =>{      //incase the data still don't load, this component does the following
        //The refetch function is used to manually trigger a data fetch. It sets isLoading to true, indicating that a fetch is in progress, and then calls the fetchData function to fetch the data again.
        setIsLoading(true);         //it sets the isloading data to be true
        fetchData();                //and fetches the data again
    }

    return{ 
        //Finally, the useFetch hook returns an object with four properties: data, isLoading, error, and refetch. These properties can be used in the calling component to access the fetched data, loading status, error information, and trigger a manual data fetch.
        data, isLoading,
        error, refetch
    };  //at d end of the day, it returns these data that can be reused continuosly as long as the useFetch custom-made hook is used
}

export default useFetch;