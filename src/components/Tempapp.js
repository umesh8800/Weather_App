import React,{useEffect} from 'react'
import './css/style.css';
import weather from './weather.png'


const Tempapp=()=> {
    const [city,setCity]=React.useState(null)
    const [search,setSearch]=React.useState('Mumbai')

    useEffect(() => {
        const fetchApi = async()=>{
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=614035cfa2725978bb955974e0d5b915`
            const response = await fetch(url);

            const resJson= await response.json();
            console.log(response); 
            setCity(resJson.main);

        }
        fetchApi();
    },[search])

    return (
        <div>
        <div className='here'>
             <input type='search'
                // value={search}
                placeholder='Search here'
                className='inputFeild'
                onChange={(event)=>{ setSearch(event.target.value)
                }} />
        </div>
        <div className='box'>
            <div className='inputData'>
              
                {!city ? (
                    <p>No Data Found</p>
                ):(  
                    <div>    
                    <div className='info'>
                        <h2 className='locatiion'> 
                        <i className="fas fa-street-view" style={{color:"red"}}></i>  {search}
                        </h2>
                        <img src={weather}/>
                        <h1 className='temp'>
                            {city.temp}	°C
        
                        </h1>
                        <h3 className='tempmin_max'> Min :{city.temp_min} °C  | Max: {city.temp_max} °C </h3>
        
                    </div>
    
                    </div>

                )
                }
     
            </div> 
            
        </div>
        </div>
    )
}

export default Tempapp;
