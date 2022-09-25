import React from 'react'
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../helpers';
import { HeroCard } from '../components';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  
  
  //desestructuraciòn del objeto "Location" para obtener de la propiedad "search" nuestra "query/consulta" o "q"
  const {q = ''} = queryString.parse(location.search);
  const heroes = getHeroesByName(q);
  const showSearch= (q.length ===0 );
  const showError = (q.length > 0 ) && heroes.length ===0 ;
  
  //Utilizamos "map" para recorrer nuestro listado de heroes y mostrar en pantalla el resultado de nuestra busqueda segun el nombre del heroe, dibujando la tarjeta de nuestro heroe enviando por prop el heroe que se obtiene de la busqueda y lo almacenamos en una constante para no cargar y ensuciar nuestro jsx
  const mostrarImagenDeHereoPorNombre= 
 
  heroes.map(hero => (
    <HeroCard key={hero.id}  hero = {hero} /> 
   )
  );

  const onSearchSubmit= (e)=>{
    e.preventDefault();
    //if(searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
    
  }
   
  const{searchText, onInputChange} = useForm({

    searchText:q

  });


  return (
    <>
    <h1>Busquedas</h1>
    <hr />

  <div className="row">
    <div className="col-5">
    
    <h4>Buscando heroes</h4>
    <hr />
    <form onSubmit={onSearchSubmit}>
      <input 
      type        ="text" 
      className   ='form-control' 
      name        ='searchText' 
      placeholder ='Busqueda de heroes'
      autoComplete='off' 
      value       ={searchText}
      onChange    ={onInputChange}
      />
    
    <button 
           type     ='button' 
           className='btn btn-outline-info mt-1' >  
      Search
    </button>
    
    </form>
    </div>

    <div className="col-7">
     <h4>Resultados</h4>
     <hr />
   
     {/* {
      (q==='') ? <div className='alert alert-primary'> Buscar un heroe </div> : (heroes.length ===0) && 
      
      <div className='alert alert-danger'>
      Sin resultados para <b>{q}</b>
      </div>
     } */}
      <div className='alert alert-primary animated__animated animated__fadeIn' style={{display:showSearch ? '' : 'none'}}> Buscar un heroe </div> 
     
      <div className='alert alert-danger animated__animated animated__fadeIn' style={ {display:showError ? '' : 'none'}}>
      Sin resultados para <b>{q}</b>
      </div>

     

    {mostrarImagenDeHereoPorNombre}

    </div>
</div>



    </>
  )
}
