import React from 'react'
import { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './HeroCard';


export const HeroList = ({publisher}) => {
    
    const listHeroes = useMemo(()=>getHeroesByPublisher(publisher),[publisher]) ;
    
    const heroesItems =  listHeroes.map((heroe) =>
                                           <HeroCard key={heroe.id} hero={heroe} />
                                          //<li key={heroe.id}>{heroe.superhero}</li>
                                        );
    
    return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
     {heroesItems}
    </div>
    
    
  )
}
